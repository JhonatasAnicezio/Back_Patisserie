import { Request, Response } from 'express';
import IServiceUser from '../interfaces/IServiceUser';

class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async getUsers (req: Request, res: Response) {
    const users = await this._service.getUsers();

    return res.status(200).json({ users });
  }
}

export default UserController;