import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
// dotenv.config({path: ".env.development"});

export const appConfig = {
    "node_port": process.env.PORT,
    
    "mysql_host": process.env.DB_MYSQL_HOST,
    "mysql_user": process.env.DB_MYSQL_USER,
    "mysql_passwd": process.env.DB_MYSQL_PASSWORD,
    "mysql_port": process.env.DB_MYSQL_PORT,
    "mysql_db_name": process.env.DB_MYSQL_NAME,

    "salt_rounds": Number(process.env.SALT_ROUNDS),

    "jwt": process.env.JWT
};