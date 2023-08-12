"use strict"

import { Router } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {
    deleteTodo,
    getSpecificTodo,
    getTodos, 
    insertTodo
} from "../controllers/controllers_todo";

const router = Router();

router.use(cors());
router.use(bodyParser.json());

router.get('/get-todos/', getTodos);
router.get('/get-todos/:todoid', getSpecificTodo);
router.post('/insert-todo/', insertTodo);
router.delete('delete-todo/:todoid', deleteTodo);


export default router;