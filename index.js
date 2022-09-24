const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const connect = url => {
  return mongoose.connect("mongodb+srv://admin:techforum@techforum.et98x9p.mongodb.net/?retryWrites=true&w=majority", config.db.options);
};

app.listen(config.port);
connect(config.db.prod);
mongoose.connection.on('error', console.log);

module.exports = { connect };

