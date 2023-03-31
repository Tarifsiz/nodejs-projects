const express = require('express');
const app = express();
const todos = require('./routes/todos');
const connectDB = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.get('/api/v1/whoami', (req, res) => {
    res.send('To-Do API');
});

// Get all the to-dos
app.use('/api/v1/todos', todos);




// Create a new to-do
// app.post('api/v1/todos', (req, res) => {
    
// });

// // Get a single to-do
// app.get('api/v1/todos/:id', (req, res) => {
    
// });

// // Update a to-do
// app.patch('api/v1/todos/:id', (req, res) => {
    
// });

// // Delete a to-do
// app.delete('api/v1/todos/:id', (req, res) => {
    
// });

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
