/* eslint-disable @typescript-eslint/no-unsafe-return */
import UsersDao from "../dao/Users"

class UsersService {
  static save = async (ipAddress: string) => {
    const usersDao = new UsersDao()
    const result = await usersDao.save(ipAddress)

    return result
  }

  static get = async (ipAddress: string) => {
    const usersDao = new UsersDao()
    const result = await usersDao.getByIpAddress(ipAddress)

    return result
  }

  static getIpAddress = async () => {
    const usersDao = new UsersDao()
    const result = await usersDao.getIpAddress()
    
    return result.data.IPv4
  }
}

export default UsersService