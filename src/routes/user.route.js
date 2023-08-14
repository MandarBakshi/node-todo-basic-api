"use strict"

import { Router } from "express";
import { handleLogin } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/login/', handleLogin);

export { userRouter }