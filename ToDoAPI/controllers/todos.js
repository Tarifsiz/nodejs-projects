const ToDo = require('../modules/ToDo');

const getAllToDos = (req, res) => {
    res.send('All ToDos retrieved!')
}

const createToDo = (req, res) => {
    res.json(req.body)
}

const getToDo = (req, res) => {
    res.json({ id: req.params.id })
}

const updateToDo = (req, res) => {
    res.send('ToDo updated!')
}

const deleteToDo = (req, res) => {
    res.send('ToDo deleted!')
}

module.exports = {
    getAllToDos,
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
}