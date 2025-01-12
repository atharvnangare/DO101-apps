// Import express
const express = require('express');

// Initialize the app
const app = express();

// Define the /mars endpoint
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});

// Make the app listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});