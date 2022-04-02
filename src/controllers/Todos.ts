/* eslint-disable no-console */
import ToDosService from '../services/ToDos'
import ErrorHandler from '../shared/utils/ErrorHandler'

import { Request, Response } from 'express'

class ToDosController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const { userId } = req.query
            const toDosService = new ToDosService()
            const result = await toDosService.getAll(Number(userId))

            res.status(200)
            res.send({
                success: true,
                result
            })
        } catch (err) {
            ErrorHandler.processError(err as Error, req, res)
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const { userId, description } = req.body
            const toDosService = new ToDosService()
            const result = await toDosService.save({ userId, description })

            res.status(200)
            res.send({
                success: true,
                result
            })
        } catch (err) {
            ErrorHandler.processError(err as Error, req, res)
        }
    }

    static updateById = async (req: Request, res: Response) => {
        try {
            const { id, description } = req.body
            const toDosService = new ToDosService()
            const result = await toDosService.updateById({ id, description })

            res.status(200)
            res.send({
                success: true,
                result
            })
        } catch (err) {
            ErrorHandler.processError(err as Error, req, res)
        }
    }

    static deleteById = async (req: Request, res: Response) => {
        try {
            const { id } = req.query
            const toDosService = new ToDosService()
            const result = await toDosService.deleteById(Number(id))

            res.status(200)
            res.send({
                success: true,
                result
            })
        } catch (err) {
            ErrorHandler.processError(err as Error, req, res)
        }
    }
}

export default ToDosController