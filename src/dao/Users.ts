import { Users } from '../shared/entity/Users'

import axios from 'axios'
import { getRepository } from 'typeorm'

class UsersDao {
  save = (ipAddress: string) => getRepository(Users).save({ ipAddress })

  getByIpAddress = (ipAddress: string) => getRepository(Users)
    .createQueryBuilder("users")
    .where("users.ipAddress = :ipAddress", { ipAddress })
    .getOne()

  getIpAddress = () => axios({
    method: 'GET',
    url: 'https://geolocation-db.com/json'
  })
}

export default UsersDao