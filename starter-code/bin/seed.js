const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const celebrities = [
  { name: 'Yoshi', ocupation: 'Student', catchPhrase: 'whatever' },
  { name: 'Not-pedro', ocupation: 'Layer', catchPhrase: 'caboom' },
  { name: 'Isma', ocupation: 'Robar carteras', catchPhrase: 'ijbcjdkcn' },
];

mongoose.connect('mongodb://localhost:27017/starter-code', { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Celebrity.create(celebrities);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
