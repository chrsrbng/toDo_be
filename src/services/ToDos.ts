import ToDosDao from "../dao/ToDos"

class ToDosService {
    private toDosDao: ToDosDao

    constructor() {
        this.toDosDao = new ToDosDao()
    }

    save = ({ userId, description }: { userId: number, description: string }) => this.toDosDao.save({ userId, description })

    updateById = ({ id, description }: { id: number, description: string }) => this.toDosDao.updateById({ id, description })

    getAll = (userId: number) => this.toDosDao.getAll(userId)

    deleteById = (id: number) => this.toDosDao.deleteById(id)
}

export default ToDosService