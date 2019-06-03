const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: String,
  genre: String,
  albums: [{
    name: String,
    year: Number,
  }],

});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
