const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 as a default

// Serve static files (HTML, CSS, JS, images, etc.) from a directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests to the root URL ("/") - You can adjust this as needed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});