const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404)
    .send({
      error: 'Page not found.',
      name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
  var user1 = {
    name: 'Narcis',
    age: 24
  };

  var user2 = {
    name: 'Ionut',
    age: 25
  };

  var usrArr = [user1, user2];

  res.status(200).send(usrArr);
});

app.listen(3000);

module.exports.app = app;
