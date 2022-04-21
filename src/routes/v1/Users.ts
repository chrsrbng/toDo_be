import UsersController from '../../controllers/Users';
import AuthMiddleware from '../../shared/middlewares/Auth';

import { Router } from 'express';

const usersRoute: Router = Router();

usersRoute.get('/', AuthMiddleware.verifyRequest, UsersController.get);
usersRoute.post('/', AuthMiddleware.verifyRequest, UsersController.create);
usersRoute.get('/getIp', AuthMiddleware.verifyRequest, UsersController.getIp)

export default usersRoute;
