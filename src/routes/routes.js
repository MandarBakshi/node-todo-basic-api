"use strict"

import { Router } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {
    deleteTodo,
    // fillUsers,
    getSpecificTodo,
    getTodos, 
    insertTodo,
    registerUser
} from "../controllers/controllers_todo.js";

const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get('/get-todos/', getTodos);
router.get('/get-todos/:todoid', getSpecificTodo);
router.post('/insert-todo/', insertTodo);
router.delete('delete-todo/:todoid', deleteTodo);

// routes for user related tasks
router.post('/register/', registerUser);


// test routes
// router.post('/fill-users/', fillUsers);
// router.post('/fill-user/', insertUser);


export default router;