const { Thought } = require('../models');
const mongoose = require('mongoose');

const thoughtData = [
  {
    thoughtText: 'Thought 1',
    username: 'user1',
    reactions: []
  },
  {
    thoughtText: 'Thought 2',
    username: 'user2',
    reactions: []
  },
  {
    thoughtText: 'Thought 3',
    username: 'user3',
    reactions: []
  },
  {
    thoughtText: 'Thought 4',
    username: 'user4',
    reactions: []
  },
  {
    thoughtText: 'Thought 5',
    username: 'user5',
    reactions: []
  },
];

const seedThoughts = () => {
  return Thought.deleteMany({})
    .then(() => Thought.collection.insertMany(thoughtData));
};

module.exports = seedThoughts;