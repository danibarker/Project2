// inserting movies into db
require ('./src/db/mongoose')
const movie = new Movie({title: "Bitter Moon", tmdb:16573})
movie.save()


// Find movies in the db

