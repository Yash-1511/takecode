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
// const routes = require('./routes');

// define routes
// app.use("/api",routes);
require('./routes.js')(app);


const server = app.listen(config.port, () => {
  console.log(
      `Listening on port ${config.port}. Visit http://localhost:${config.port}/ in your browser.`);
});
