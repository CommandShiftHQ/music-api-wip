const express = require('express');
const json = require('express').json();

const app = express();
app.use(json);

const artists = require('./controllers/artists');

app.post('/artists', artists.create);

app.get('/artists', artists.list);

app.get('/artists/:id', artists.find);

app.patch('/artists/:id', artists.update);

app.delete('/artists/:id', artists.remove);

app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = app;
