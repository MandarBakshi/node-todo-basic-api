import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const appConfig = {
    "node_port": process.env.PORT,
    
    "mysql_host": process.env.DB_MYSQL_HOST,
    "mysql_user": process.env.DB_MYSQL_USER,
    "mysql_passwd": process.env.DB_MYSQL_PASSWORD,
    "mysql_port": process.env.DB_MYSQL_PORT,
    "mysql_db_name": process.env.DB_MYSQL_NAME,
};