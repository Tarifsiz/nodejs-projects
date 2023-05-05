const express = require('express');
const app = express();
const todos = require('./routes/todos');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/api/v1/whoami', (req, res) => {
    res.send('To-Do API');
});

// Get all the to-dos
app.use('/api/v1/todos', todos);

app.use(notFound);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();
