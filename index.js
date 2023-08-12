"use strict"

import express from 'express';
import router from './src/routes/routes.js';

import { appConfig } from './src/config/config.js';

const app = express();
app.use('/api', router);

const portNum = appConfig.node_port

app.listen(portNum, function() {
    console.log(`server listening on port ${portNum}`);
});