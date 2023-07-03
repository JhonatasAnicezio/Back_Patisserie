import User from '../../database/models/Users';
import * as bcryptjs from 'bcrypt';
import IServiceUser, { Login } from '../interfaces/IServiceUser';
import { Op } from 'sequelize';
import IUser from '../interfaces/IUsers';
import IMessage from '../interfaces/IUtils';
import JWTUtil from '../utils/JWTUtils';

class UserService implements IServiceUser {
  protected model = User;

  private _JWTUtil: JWTUtil = new JWTUtil();

  async getUser(id: number): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if(user) {
      delete (user as { password?: string }).password;

      return { type: 200, message: user };
    }

    return { type: 404, message: 'user not found' };
  }
  
  async getUsers(): Promise<IUser[]> {
    const users = await this.model.findAll({
      where: {
        role: {
          [Op.not]: 'admin',
        },
      },
      attributes: { exclude: ['password'] },
    });
  
    return users;
  }

  async postLogin({ email, password }: Login): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { email },
    });
    if (!user) return { type: 401, message: 'Invalid email or password' };

    const pass = bcryptjs.compareSync(password, user.password);

    if (!pass) return { type: 401, message: 'Invalid email or password' };

    delete (user as { password?: string }).password;

    const userData = {
      id: user.id,
      name: user.name,
      phone: user.phone,
      role: user.role,
    };

    const token = this._JWTUtil.generateToken({ payload: user});

    return { type: 200, message: { token, userData } };
  }

  async postRegister({ name, email, password, phone, role }: User): Promise<IMessage> {
    const user = await this.model.findOne({
      where: { 
        [Op.or]: [
          { email },
          { phone }
        ]
      },
      attributes: { exclude: ['password', 'id'] },
    });
  
    if (user) {
      if (user.email === email) {
        return { type: 409, message: 'E-mail já registrado' };
      }
  
      if (user.phone === phone) {
        return { type: 409, message: 'Número de telefone já registrado' };
      }
    }

    const saltRounds = 8;

    const hashedPassword = bcryptjs.hashSync(password, saltRounds);

    await this.model.create({ name, email, phone, password: hashedPassword, role });

    return { type: 201, message: 'Created' };
  }

  async deleteUser(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }

  async updateUsers(id: number, newRole: string): Promise<void> {
    await this.model.update({ role: newRole }, { where: { id } });
  }
}

export default UserService;