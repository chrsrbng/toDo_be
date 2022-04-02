import ToDosController from '../../controllers/Todos'
import AuthMiddleware from '../../shared/middlewares/Auth'

import { Router } from 'express'

const toDosRoute: Router = Router()

toDosRoute.get('/', AuthMiddleware.verifyRequest, ToDosController.getAll)
toDosRoute.post('/', AuthMiddleware.verifyRequest, ToDosController.create)
toDosRoute.post('/updateById', AuthMiddleware.verifyRequest, ToDosController.updateById)
toDosRoute.post('/deleteById', AuthMiddleware.verifyRequest, ToDosController.deleteById)

export default toDosRoute