const { Movie } = require('../models/models');
const debug = require('debug')('mwdb:server');

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

// Handle movie create on POST.
exports.movie_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie create POST');
};

// Handle movie delete on POST.
exports.movie_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie delete POST');
};

// Handle movie update on POST.
exports.movie_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie update POST');
};