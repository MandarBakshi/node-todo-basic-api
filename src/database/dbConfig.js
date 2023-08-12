import mysql from 'mysql2';
import { appConfig } from '../config/config';

const dbSettings = {
    host: appConfig.mysql_host,
    user: appConfig.mysql_user,
    password: appConfig.mysql_passwd,
    name: appConfig.mysql_db_name
};

const connectionPool = mysql.createPool(dbSettings).promise();

export default connectionPool;