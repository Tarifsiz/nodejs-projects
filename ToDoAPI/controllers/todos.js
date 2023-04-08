const ToDo = require('../modules/ToDo');

const getAllToDos = (req, res) => {
    res.send('All ToDos retrieved!')
}

const createToDo = async (req, res) => {
    try {
        const todo = await ToDo.create(req.body)
        res.status(201).json({ todo })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
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