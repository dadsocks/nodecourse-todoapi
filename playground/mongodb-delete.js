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

  //deleteMany
  // db.collection('Todos').deleteMany({text: "Eat"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: "Bill"}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5be23477e2ebfc041df15eaf')
  }).then((result) => {
    console.log(result);
  });



  // client.close();

});
