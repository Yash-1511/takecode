const bcrypt = require('bcryptjs');

const setupDB = require('./db');
const User = require('../models/user');

const args = process.argv.slice(2);
const email = args[0];
const password = args[1];

const seedDB = async () => {
  try {
    console.log('seed db started');

    if (!email || !password) throw new Error('missing arguments');

    const user = new User({
      email,
      password,
      username: 'moderator',
      role: "moderator"
    });

    const existingUser = await User.findOne({ email: user.email });
    console.log('existingUser', existingUser);
    if (existingUser) throw new Error('user collection is seeded!');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    await user.save();

    console.log('seed db finished');
    return 0;
  } catch (error) {
    console.log(
      'error while seeding database'
    );
    console.log(error);
    return null;
  }
};

(async () => {
  await setupDB().then(async () => {
    await seedDB();
  });
})();
