// Importing Required Packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const setupDB = require('./utils/db');
const app = express();
const config = require("./config");

// some basic configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true
  })
);
app.use(cors());

// connect database 
setupDB();


// routes 
const authRoutes = require('./routes/userRoute');
const answerRoutes = require("./routes/answerRoute");
const questionRoutes = require("./routes/questionRoute");
const commentRoutes = require("./routes/commentRoute");
const tagRoutes = require("./routes/tagRoute");
const voteRoutes = require("./routes/voteRoute");

// define routes
app.use("/api",authRoutes);
app.use("/api",answerRoutes);
app.use("/api",questionRoutes);
app.use("/api",commentRoutes);
app.use("/api",tagRoutes);
app.use("/api",voteRoutes);

const server = app.listen(config.port, () => {
  console.log(
      `Listening on port ${config.port}. Visit http://localhost:${config.port}/ in your browser.`);
});
