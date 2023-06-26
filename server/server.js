const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve static files from the Angular client build
app.use(express.static(path.join(__dirname, '../client/dist/client')));

// const mongodbUri = process.env.MONGODB_URI;
// mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// Catch all other routes and return the Angular index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});

// Routes
// TODO: Define your server routes here

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
