// create web server with express and attach comments routes
// to the web server.

// Load modules
const express = require('express');
const comments = require('./comments');

// Create an express web server
const app = express();

// Attach comments routes to the web server
app.get('/comments', comments.list);
app.post('/comments', comments.create);
app.get('/comments/:id', comments.read);
app.put('/comments/:id', comments.update);
app.delete('/comments/:id', comments.delete);

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Web server started on http://localhost:3000');
});