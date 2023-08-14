"use strict"

import express from 'express';
import bodyParser from 'body-parser';

import { appConfig } from './src/config/app.config.js';
import { userRouter } from './src/routes/user.route.js';

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRouter);

const portNum = appConfig.node_port;

app.listen(portNum, function() {
    console.log(`server listening on port ${portNum}`);
});