const ToDo = require('../modules/ToDo');

const getAllToDos = async (req, res) => {
    try {
        const todos = await ToDo.find({})
        res.status(200).json({ todos })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createToDo = async (req, res) => {
    try {
        const todo = await ToDo.create(req.body)
        res.status(201).json({ todo })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getToDo = async (req, res) => {
    try {
        const {id: taskID } = req.params
        const todo = await ToDo.findOne({ _id:taskID })
        if (!todo){
            return res.status(404).json({ msg: `No task found with id:${taskID}` })
        }
        res.status(200).json({ todo })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
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