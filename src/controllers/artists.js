const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};

exports.list = (req, res) => Artist.find({}).then(list => res.status(200).json(list));

exports.find = (req, res) => Artist.findById({ _id: req.params.id }, (err, artist) => {
  if (err) {
    return res.status(404).json({ error: 'The artist could not be found.' });
  }
  res.status(200).json(artist);
});

exports.update = (req, res) => Artist.findById({ _id: req.params.id }, (err, artist) => {
  if (err) {
    return res.status(404).json({ error: 'The artist could not be found.' });
  }

  artist.set({
    genre: req.body.genre,
    name: req.body.name,
  }).save((err, artistUpdated) => {
    if (err) {
      res.json('Could not update');
    }
    res.status(200).json(artistUpdated);
  });
});


exports.remove = (req, res) => Artist.findByIdAndDelete({ _id: req.params.id }, (err, artist) => {
  if (err) {
    return res.status(404).json({ error: 'The artist could not be found.' });
  }

  res.status(204).json('Deleted');
});
