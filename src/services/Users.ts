import UsersDao from "../dao/Users"

class UsersService {
  static save = (ipAddress: string) => UsersDao.save(ipAddress)

  static get = (ipAddress: string) => UsersDao.getByIpAddress(ipAddress)
}

export default UsersService