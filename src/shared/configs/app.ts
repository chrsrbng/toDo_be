import dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const APP = process.env.APP || '';
export const PORT = process.env.PORT || '';
export const LOGGER_LEVEL = process.env.LOGGER_LEVEL || 'info';

/* DB Info */
export const DB_DIALECT = process.env.DB_DIALECT || '';
export const DB_HOST = process.env.DB_HOST || '';
export const DB_PORT = process.env.DB_PORT || 0;
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || '';