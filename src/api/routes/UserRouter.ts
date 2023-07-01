import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const teamRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

teamRouter.get(
  '/',
  (req: Request, res: Response) => userController.getUsers(req, res),
);

export default teamRouter;