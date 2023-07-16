const express = require('express');
const apiRoutes = require('./routes/api');
const { connectDb } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use api routes
app.use('/api', apiRoutes);

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});