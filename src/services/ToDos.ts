/* eslint-disable no-console */
import ToDosDao from "../dao/ToDos"

class ToDosService {
    private toDosDao: ToDosDao

    constructor() {
        this.toDosDao = new ToDosDao()
    }

    public save = async ({ userId, description }: { userId: number, description: string }) => {
        const result = await this.toDosDao.save({ userId, description })

        return result
    }

    public updateById = async ({ id, description }: { id: number, description: string }) => {
        const result = await this.toDosDao.updateById({ id, description })

        return result
    }

    public getAll = async (userId: number) => {
        const result = await this.toDosDao.getAll(userId)

        return result
    }

    public deleteById = async (id: number) => {
        const result = await this.toDosDao.deleteById(id)

        return result
    }
}

export default ToDosService