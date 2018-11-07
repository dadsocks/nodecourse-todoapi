// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to conect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('ToDoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5be240e29bef201f375901db')
  //   },{
  //     $set: {
  //       completed: true
  //     }
  //   },{
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be11d1deb1eee330aff5702')
  },{
      $set: {
        name: "Bill"
      },
      $inc: {
        age: 1
      }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();

});
