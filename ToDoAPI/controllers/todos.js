const ToDo = require('../modules/ToDo');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error')

const getAllToDos = asyncWrapper(async (req, res) => {

    const todos = await ToDo.find({})
    res.status(200).json({ todos })
})

const createToDo = asyncWrapper(async (req, res) => {

    const todo = await ToDo.create(req.body)
    res.status(201).json({ todo })
})

const getToDo = asyncWrapper(async (req, res, next) => {
    
    const {id: todoID } = req.params
    const todo = await ToDo.findOne({ _id:todoID })
    if (!todo){
        return next(createCustomError(`No task found with id:${todoID}`, 404))
    }
    res.status(200).json({ todo })
})

const updateToDo = asyncWrapper(async (req, res) => {
    
    const { id: todoID } = req.params;
    const todo = await ToDo.findOneAndUpdate({ _id:todoID }, req.body, {
        new: true,
        runValidators: true
    } );
    if (!todo){
        return next(createCustomError(`No task found with id:${todoID}`, 404))
    }
    res.status(200).json({ todo })
})

const deleteToDo = asyncWrapper(async (req, res) => {
    
    const {id: todoID } = req.params;
    const todo = await ToDo.findOneAndDelete({ _id:todoID });
    if (!todo){
        return next(createCustomError(`No task found with id:${todoID}`, 404))
    }
    res.status(200).json({ todo })
})

module.exports = {
    getAllToDos,
    createToDo,
    getToDo,
    updateToDo,
    deleteToDo
}