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
}

export default UsersService