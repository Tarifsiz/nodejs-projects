const express = require('express');
const router = express.Router();

const { getAllToDos,
        createToDo,
        getToDo,
        updateToDo,
        deleteToDo } = require('../controllers/todos');

router.route('/').get(getAllToDos).post(createToDo);
router.route('/:id').get(getToDo).patch(updateToDo).delete(deleteToDo);

module.exports = router;