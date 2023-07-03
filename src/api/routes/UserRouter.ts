import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import validateFieldsUser from '../middlewares/validateFieldsUser';
import authToken from '../middlewares/authToken';

const teamRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

teamRouter.get(
  '/me',
  authToken.verify,
  (req: Request, res: Response) => userController.getUser(req, res),
);

teamRouter.get(
  '/',
  (req: Request, res: Response) => userController.getUsers(req, res),
);

teamRouter.post(
  '/login',
  validateFieldsUser.verify,
  (req: Request, res: Response) => userController.postLogin(req, res),
);

teamRouter.post(
  '/',
  validateFieldsUser.verifyRegister,
  (req: Request, res: Response) => userController.postRegisterUser(req, res),
);

teamRouter.delete(
  '/:id',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.deleteUser(req, res),
);

teamRouter.get(
  '/',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.getUsers(req, res),
);

teamRouter.put(
  '/:id',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.updateUsers(req, res),
);

export default teamRouter;