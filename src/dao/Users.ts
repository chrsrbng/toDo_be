import { Users } from '../shared/entity/Users'

import { getRepository } from 'typeorm'

class UsersDao {
  save = (ipAddress: string) => getRepository(Users).save({ ipAddress })

  getByIpAddress = (ipAddress: string) => getRepository(Users)
    .createQueryBuilder("users")
    .where("users.ipAddress = :ipAddress", { ipAddress })
    .getOne()
}

const userDao = new UsersDao()

export default userDao