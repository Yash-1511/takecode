const mongoose = require('mongoose');
const config = require("../config");
const setupDB = async () => {
  try {
    // Connect to MongoDB
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(config.db.prod, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() =>
        console.log(`MongoDB Connected!`)
      )

      .catch(err => console.log(err));
  } catch (error) {
    return null;
  }
};

module.exports = setupDB;