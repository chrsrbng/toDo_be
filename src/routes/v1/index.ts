import toDosRoute from './Todos';
import usersRoute from './Users';

import AuthMiddleware from '../../shared/middlewares/Auth';

import { Router } from 'express';

const v1Routes: Router = Router();

v1Routes.use('/users', AuthMiddleware.verifyToken, usersRoute)
v1Routes.use('/todos', AuthMiddleware.verifyToken, toDosRoute)

export default v1Routes;
