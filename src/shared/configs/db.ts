import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } from './app'

import { ToDos } from '../entity/ToDos'
import { Users } from '../entity/Users'

import { createConnection } from 'typeorm'

export const connection = createConnection({
        type: 'postgres',
        database: DB_NAME,
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USER,
        password: DB_PASSWORD,
        entities: [ToDos, Users],
        synchronize: true
})