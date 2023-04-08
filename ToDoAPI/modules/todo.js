const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name field is required'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ToDo', TodoSchema);