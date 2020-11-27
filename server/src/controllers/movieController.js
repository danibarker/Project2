const { Movie } = require('../models/models');
const debug = require('debug')('mwdb:server');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all movies.
exports.movie_list = async function(req, res) {
  // an array of entries is returned
  const movieEntries = await Movie.find();
  if ( movieEntries != null ) {
    debug(`Success: movies found: ${movieEntries}`);  // success
    res.status(200).json(movieEntries);
  } else {
    debug(`Error: cannot find movies: ${movieEntries}`);  // failure
    res.sendStatus(400);
  }
};

// Display detail page for a specific movie.
exports.movie_detail = async function(req, res) {
  const tmdb = req.body.tmdb;
  debug(`Find single movie: ${tmdb}`);
  // an object is returned
  const response = await Movie.findOne( { tmdb: tmdb });
  if ( response != null ) {
    const movie = response.title;
    debug(`Found movie: ${movie}`);
    debug(`Find movie result: ${response}`);
    res.status(200).json(response);
  } else {
    debug(`Error: cannot find movie with tmdb id: ${tmdb}`);
    res.sendStatus(400);
  }
};

// Handle movie create on POST.
exports.movie_create_post = async function(req, res) {
  const newMovie = JSON.parse(JSON.stringify(req.body))
  debug(`newmovie ${newMovie}`)

  const newRecord = {
    "title": newMovie.title,
    "tmdb": newMovie.tmdb,
  }
  debug('movie newRecord: ' + newRecord);
  
  // add new record to database
  await Movie.create(newRecord).then((result) => {
    debug(`Success: movie created: ${newRecord}`);  // success
    debug(`Create movie result: ${result}`);
    res.status(200).json(result);
  }).catch((error) => {
    debug(`Error: unable to create movie: ${newRecord}`);  // failure
    debug(`Error: movie error: ${error}`);
    res.status(500).json(error);
  })
};

// Handle movie delete on POST.
exports.movie_delete_post = async function(req, res) {
  const tmdb = req.body.tmdb;
  debug(`Deleting Movie: ${tmdb}`);
  
  // delete a single entry
  const response = await Movie.deleteOne({ tmdb: tmdb });
  const result = JSON.stringify(response);
  debug(`delete response ${response}`);
  
  if (response.deletedCount != 0) {
    const movie = response.title;
    debug(`Success: movie deleted: ${movie}`);  // success
    debug(`Delete movie response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to delete movie: ${result}`);  // failure
    res.status(500).json(response);
  }
};

// Handle movie update on POST.
exports.movie_update_post = async function(req, res) {
  const movieObj = JSON.parse(JSON.stringify(req.body))
  debug(`movie ${movieObj}`)
  const tmdb = movieObj.tmdb

  const response = await Movie.updateOne({
    tmdb: tmdb
  },
  {
    $set: movieObj
    }
  )
  
  const result = JSON.stringify(response);
  debug(`response ${response}`)
  
  if (response.nModified != 0) {
    
    debug(`Success: movie updated: ${tmdb}`);
    debug(`Update movie response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to update movie: ${result}`);
    res.status(500).json(response)
  }
};