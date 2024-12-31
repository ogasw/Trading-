const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Use body parser to parse POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Sample login credentials (in a real app, you would query a database)
  const validUsername = 'user123';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    res.send('Login successful! Redirecting...');
    // Redirect to your Bitcoin trading page
    // res.redirect('/trading'); // Replace with actual trading page URL
  } else {
    res.send('Invalid credentials. Please try again.');
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
    
