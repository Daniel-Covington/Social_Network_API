const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
  },
  {
    username: 'user4',
    email: 'user4@example.com',
  },
  {
    username: 'user5',
    email: 'user5@example.com',
  },
];

const seedUsers = () => {
  return User.deleteMany({})
    .then(() => User.collection.insertMany(userData));
};

module.exports = seedUsers;