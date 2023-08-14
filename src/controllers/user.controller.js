"use strict"

import jwt from 'jsonwebtoken';
import { queryPool } from "../database/db.mysql.config.js";
import { appConfig } from '../config/app.config.js';

export const handleLogin = async (req, res) => {
    let {username, passwd} = req.body.formdata;

    if (username === undefined || passwd === undefined) {
        return res.status(400).json({
            success: false,
            msg: "empty credentials"
        });
    }

    let selectQuery = "SELECT firstname,lastname,username,email FROM users WHERE username = ? AND passwd = ?";

    try {
        let [resultData] = await queryPool.query(selectQuery, [username, passwd]);

        if (resultData.length < 1) {
            return res.json({
                success: false,
                msg: "wrong credentials"
            });
        }

        let userToken = jwt.sign(resultData[0], appConfig.auth.jwt_key, {expiresIn: "12h"});

        // console.log("\n\nGenerated token\n", userToken, "\n");
        res.cookie("token", userToken, {maxAge: 12*60*60*100, httpOnly: true, secure: true});

        res.json({
            success: true, data: resultData, token: userToken
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false, msg: error
        });
    }

}