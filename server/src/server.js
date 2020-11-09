// inserting movies into db
require ('./db/mongoose')
const Movie = require("./db/models")
const movie = new Movie({title: "Bitter Moon", tmdb:16573})
movie.save()


// Find movies in the db
const foundMovie = Movie.findOne({title:"Bitter Moon"})
console.log(foundMovie)