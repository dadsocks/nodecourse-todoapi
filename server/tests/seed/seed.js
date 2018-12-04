const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const user1ID = new ObjectID();
const user2ID = new ObjectID();
const users = [{
  _id: user1ID,
  email: 'xauthtest@test.com',
  password: 'user1pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: user1ID, access: 'auth'}, 'abc123').toString()
  }]
},{
  _id: user2ID,
  email: 'noxauthtest@test.com',
  password: 'user2pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: user2ID, access: 'auth'}, 'abc123').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: user1ID
},{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: user2ID
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const user1 = new User(users[0]).save();
    const user2 = new User(users[1]).save();

    return Promise.all([user1, user2]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
