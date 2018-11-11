const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = "5be4f8b00246f110f1f7c86c";
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID Not Found');
//   }
//
//   console.log('Todo by ID', todo);
//
// }).catch((e) => console.log(e));

User.findById('5be4f8b00246f110f1f7c86c').then((user) => {
  if(!user) {
    return console.log('ID Not Found');
  }

  console.log('User by ID', user);
}).catch((e) => console.log(e));
