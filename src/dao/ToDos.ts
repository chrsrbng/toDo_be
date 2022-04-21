import { ToDos } from "../shared/entity/ToDos";

import { getRepository } from "typeorm";

class ToDosDao {
    save = ({ userId, description }: { userId: number, description: string }) =>
        getRepository(ToDos).save({ userId, description })

    updateById = ({ id, description }: { id: number, description: string }) =>
        getRepository(ToDos)
            .createQueryBuilder()
            .update(ToDos)
            .set({ description })
            .where('id = :id', { id })
            .execute()

    getAll = (userId: number) =>
        getRepository(ToDos)
            .createQueryBuilder('todos')
            .where('todos.userId = :userId', { userId })
            .orderBy('id')
            .getMany()

    deleteById = (id: number) =>
        getRepository(ToDos)
            .createQueryBuilder()
            .delete()
            .from(ToDos)
            .where('id = :id', { id })
            .execute()

}

export default ToDosDao