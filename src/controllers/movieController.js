const { Movie } = require('../db/models');
const debug = require('debug')('mwdb:server');



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
  const tmdb = req.params.tmdb;
  console.log(`Find single movie: ${tmdb}`);
  // an object is returned
  const response = await Movie.findOne( { tmdb: tmdb });
  if ( response != null ) {
    const movie = response.title;
    console.log(`Found movie: ${movie}`);
    console.log(`Find movie result: ${response}`);
    res.status(200).json(response);
  } else {
    console.log(`Error: cannot find movie with tmdb id: ${tmdb}`);
    res.sendStatus(400);
  }
};

// Handle movie create on POST.
exports.movie_create_post = async function (req, res) {
  const newMovie = req.body
  debug(`newmovie ${newMovie}`)

  const newRecord = {
    "title": newMovie.title,
    "tmdb": newMovie.tmdb,
  }
  debug('movie newRecord: ' + newRecord);
  try{
  // add new record to database
  const response = await Movie.create(newRecord)
  
  console.log(response)
  res.status(200).send(response);
  } catch (error) {
    console.log(error)
    debug(`Error: unable to create movie: ${newRecord}`);  // failure
    debug(`Error: movie error: ${error}`);
    res.status(500).send(error);
  }
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
  const movieObj = req.body
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