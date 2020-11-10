const mongoose = require('mongoose');

const schema = mongoose.Schema;

const movieSchema = new schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    tmdb_id: { type: String, required: true }
  }
);

// Virtual for movie's URL
movieSchema
.virtual('url')
.get(function () {
  return '/movie/' + this._id;
});

//Export model
module.exports = mongoose.model('Movie', movieSchema);