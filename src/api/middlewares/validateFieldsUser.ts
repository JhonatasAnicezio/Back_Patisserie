import { Request, Response, NextFunction } from 'express';

class validateFieldsUser {
  public static verify(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: 'All fields must be filled' });
    }

    next();
  }

  public static verifyRegister(req: Request, res: Response, next: NextFunction) {
    const { name, email, password, phone, role } = req.body;

    if (!email || !password || !name || !phone || !role) {
      return res.status(400).send({ message: 'All fields must be filled' });
    }

    next();
  }
}

export default validateFieldsUser;