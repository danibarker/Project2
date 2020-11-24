const Movie = require('../models/movie');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all movies.
exports.movie_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie list');
};

// Display detail page for a specific movie.
exports.movie_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
};

// Display movie create form on GET.
exports.movie_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie create GET');
};

// Handle movie create on POST.
exports.movie_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie create POST');
};

// Display movie delete form on GET.
exports.movie_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie delete GET');
};

// Handle movie delete on POST.
exports.movie_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie delete POST');
};

// Display movie update form on GET.
exports.movie_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie update GET');
};

// Handle movie update on POST.
exports.movie_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie update POST');
};