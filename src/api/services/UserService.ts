import User from '../../database/models/Users';
import IServiceUser, { Login } from '../interfaces/IServiceUser';
import { Op } from 'sequelize';
import IUser from '../interfaces/IUsers';
import IMessage from '../interfaces/IUtils';

class UserService implements IServiceUser {
  protected model = User;
  
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

  postLogin(user: Login): Promise<IMessage> {
    throw new Error('Method not implemented.');
  }

  postRegister(user: User): Promise<IMessage> {
    throw new Error('Method not implemented.');
  }

  deleteUser(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  updateUsers(id: number, newRole: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  getActualUser(id: number): Promise<IMessage> {
    throw new Error('Method not implemented.');
  }
}

export default UserService;