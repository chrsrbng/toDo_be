/* eslint-disable no-console */
import UsersService from '../services/Users';
import ErrorHandler from '../shared/utils/ErrorHandler';

import { Request, Response } from 'express';

class UsersController {
  static get = async (req: Request, res: Response) => {
    try {
      const { ipAddress } = req.query
      const result = await UsersService.get(ipAddress as string)

      res.status(200).send({ success: true, result })
    } catch (err) {
      ErrorHandler.processError(err as Error, req, res);
    }
  };

  static create = async (req: Request, res: Response)  => {
    try {
      const { ipAddress } = req.body
      const result = await UsersService.save(ipAddress as string)

      res.status(200).send({ success: true, result })
    } catch (err) {
      ErrorHandler.processError(err as Error, req, res);
    }
  };
}

export default UsersController;
