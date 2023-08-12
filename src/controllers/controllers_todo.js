import connectionPool from "../database/dbConfig";

export function getTodos(req, res) {
    res.json("works!");
}


export function getSpecificTodo(req, res) {
    res.json("works!");
}


export function insertTodo(req, res) {
    res.json("todo inserted");
}


export function deleteTodo(req, res) {
    res.json("todo deleted");
}