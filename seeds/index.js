const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

seedUsers()
  .then(() => seedThoughts())
  .then(() => {
    console.log('all seed data inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });