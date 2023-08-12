import bcrypt from 'bcrypt';
import connectionPool from "../database/dbConfig.js";
import { appConfig } from '../config/config.js';

export function getTodos(req, res) {
    res.json("works!");
}


export function getSpecificTodo(req, res) {
    res.json("works!");
}


export function insertTodo(req, res) {
    res.json("todo inserted");
}

export async function registerUser(req, res) {
    let insertUserQuery = "INSERT INTO users (fname, lname, username, email, mobno, passwd, city, state, country) VALUES (?,?,?,?,?,?,?,?,?);";
    
    let user = {
        "firstname": req.body.fname,
        "lastname": req.body.lname,
        "username": req.body.uname,
        "email": req.body.email,
        "monbo": req.body.mobno,
        "password": req.body.passwd,
        "city": req.body.city,
        "state": req.body.state,
        "country": req.body.country
    };

    try {
        user.password = await bcrypt.hash(user.password, appConfig.salt_rounds);
    } catch (error) {
        console.log("cannot encrypt password");
        return res.json({
            "status": "failed",
            "msg": error
        });
    }

    try {
        let resultData = await connectionPool.query(insertUserQuery, [
            user.firstname,
            user.lastname,
            user.username,
            user.email,
            user.monbo,
            user.password,
            user.city,
            user.state,
            user.country
        ]);

        return res.json({
            status: "successful",
            "msg": resultData
        });
    } catch (error) {
        console.log(error);
        return res.json({
            status: "failed to insert to user",
            "msg": error.message
        });
    }
}


export function deleteTodo(req, res) {
    res.json("todo deleted");
}