<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
=======
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
>>>>>>> 8e07dc82 (added programme)

const app = express();

// Connect mongoDB

connectDB();

// Init express Middleware

app.use(express.json({ extended: false }));

// Routes
<<<<<<< HEAD
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/request', require('./routes/request'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
=======
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/request", require("./routes/request"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
>>>>>>> 8e07dc82 (added programme)
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started, port: ${PORT}`));
