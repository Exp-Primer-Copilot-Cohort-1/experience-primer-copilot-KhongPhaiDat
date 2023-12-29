// Create web server application with express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments.js');

// Set up body parser
app.use(bodyParser.json());

// Set up route to get all comments
app.get('/comments', (req, res) => {
    res.send(comments.getAll());
});

// Set up route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send(comments.getById(req.params.id));
});

// Set up route to create a comment
app.post('/comments', (req, res) => {
    const comment = comments.create(req.body.name, req.body.content);
    res.send(comment);
});

// Set up route to update a comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.update(req.params.id, req.body.name, req.body.content);
    res.send(comment);
});

// Set up route to delete a comment
app.delete('/comments/:id', (req, res) => {
    comments.delete(req.params.id);
    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
