import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import validateFieldsUser from '../middlewares/validateFieldsUser';
import authToken from '../middlewares/authToken';

const userRouter = Router();

const userService = new UserService();
const userController = new UserController(userService);

userRouter.get(
  '/me',
  authToken.verify,
  (req: Request, res: Response) => userController.getUser(req, res),
);

userRouter.get(
  '/',
  (req: Request, res: Response) => userController.getUsers(req, res),
);

userRouter.post(
  '/login',
  validateFieldsUser.verify,
  (req: Request, res: Response) => userController.postLogin(req, res),
);

userRouter.post(
  '/',
  validateFieldsUser.verifyRegister,
  (req: Request, res: Response) => userController.postRegisterUser(req, res),
);

userRouter.delete(
  '/:id',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.deleteUser(req, res),
);

userRouter.put(
  '/:id',
  authToken.verify,
  authToken.verifyAdmin,
  (req: Request, res: Response) => userController.updateUsers(req, res),
);

export default userRouter;