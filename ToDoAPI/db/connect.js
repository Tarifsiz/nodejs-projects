const mongoose = require('mongoose');

const connectionString = 
    'mongodb+srv://ender:1q2w3e4r@nodejscluster.lvjmc6w.mongodb.net/NodeJsToDoApp?retryWrites=true&w=majority';


const connectDB = (url) => {
return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})};

module.exports = connectDB;