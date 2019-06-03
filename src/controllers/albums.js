const Artist = require('../models/artist');
const Album = require('../models/album');

exports.create = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (err) {
      res.json('Artist does not exist');
    }

    const myAlbum = new Album({
      artist,
      name: req.body.name,
      year: req.body.year,
    });

    myAlbum.save((createErr, createdAlbum) => {
      if (createErr) {
        res.json('Could not create an album');
      }

      res.status(201).json(createdAlbum);
    });
  });
};
