var express = require('express');
var router = express.Router();

// Require controller modules.
let movie_controller = require('../controllers/movieController');
let user_controller = require('../controllers/userController');
let warning_controller = require('../controllers/warningController');
let category_controller = require('../controllers/categoryController');
let frequency_controller = require('../controllers/frequencyController');
let type_controller = require('../controllers/typeController');
let severity_controller = require('../controllers/severityController');

// ***********************************
/// MOVIE ROUTES ///
// ***********************************

// GET mwdb home page.
router.get('/', movie_controller.index);

// GET request for creating a Movie. NOTE This must come before routes that display Movie (uses id).
router.get('/movie/create', movie_controller.movie_create_get);

// POST request for creating Movie.
router.post('/movie/create', movie_controller.movie_create_post);

// GET request to delete Movie.
router.get('/movie/:id/delete', movie_controller.movie_delete_get);

// POST request to delete Movie.
router.post('/movie/:id/delete', movie_controller.movie_delete_post);

// GET request to update Movie.
router.get('/movie/:id/update', movie_controller.movie_update_get);

// POST request to update Movie.
router.post('/movie/:id/update', movie_controller.movie_update_post);

// GET request for one Movie.
router.get('/movie/:id', movie_controller.movie_detail);

// GET request for list of all Movie items.
router.get('/movies', movie_controller.movie_list);

// ***********************************
/// USER ROUTES ///
// ***********************************

// GET request for creating User. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update user.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all users.
router.get('/users', user_controller.user_list);

// ***********************************
/// WARNING ROUTES ///
// ***********************************

// GET request for creating a Warning. NOTE This must come before route that displays Warning (uses id).
router.get('/warning/create', warning_controller.warning_create_get);

//POST request for creating warning.
router.post('/warning/create', warning_controller.warning_create_post);

// GET request to delete warning.
router.get('/warning/:id/delete', warning_controller.warning_delete_get);

// POST request to delete warning.
router.post('/warning/:id/delete', warning_controller.warning_delete_post);

// GET request to update warning.
router.get('/warning/:id/update', warning_controller.warning_update_get);

// POST request to update warning.
router.post('/warning/:id/update', warning_controller.warning_update_post);

// GET request for one warning.
router.get('/warning/:id', warning_controller.warning_detail);

// GET request for list of all warning.
router.get('/warnings', warning_controller.warning_list);

// ***********************************
/// CATEGORY ROUTES ///
// ***********************************

// GET request for creating a Category. NOTE This must come before route that displays Category (uses id).
router.get('/category/create', category_controller.category_create_get);

// POST request for creating category. 
router.post('/category/create', category_controller.category_create_post);

// GET request to delete category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one category.
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all category.
router.get('/categories', category_controller.category_list);

// ***********************************
/// FREQUENCY ROUTES ///
// ***********************************

// GET request for creating a Frequency. NOTE This must come before route that displays Frequency (uses id).
router.get('/frequency/create', frequency_controller.frequency_create_get);

// POST request for creating frequency. 
router.post('/frequency/create', frequency_controller.frequency_create_post);

// GET request to delete frequency.
router.get('/frequency/:id/delete', frequency_controller.frequency_delete_get);

// POST request to delete frequency.
router.post('/frequency/:id/delete', frequency_controller.frequency_delete_post);

// GET request to update frequency.
router.get('/frequency/:id/update', frequency_controller.frequency_update_get);

// POST request to update frequency.
router.post('/frequency/:id/update', frequency_controller.frequency_update_post);

// GET request for one frequency.
router.get('/frequency/:id', frequency_controller.frequency_detail);

// GET request for list of all frequency.
router.get('/frequencies', frequency_controller.frequency_list);

// ***********************************
/// TYPES ROUTES ///
// ***********************************

// GET request for creating a Types. NOTE This must come before route that displays Types (uses id).
router.get('/type/create', type_controller.type_create_get);

// POST request for creating type. 
router.post('/type/create', type_controller.type_create_post);

// GET request to delete type.
router.get('/type/:id/delete', type_controller.type_delete_get);

// POST request to delete type.
router.post('/type/:id/delete', type_controller.type_delete_post);

// GET request to update type.
router.get('/type/:id/update', type_controller.type_update_get);

// POST request to update type.
router.post('/type/:id/update', type_controller.type_update_post);

// GET request for one type.
router.get('/type/:id', type_controller.type_detail);

// GET request for list of all type.
router.get('/types', type_controller.type_list);

// ***********************************
/// SEVERITY ROUTES ///
// ***********************************

// GET request for creating a Severity. NOTE This must come before route that displays Severity (uses id).
router.get('/severity/create', severity_controller.severity_create_get);

// POST request for creating severity. 
router.post('/severity/create', severity_controller.severity_create_post);

// GET request to delete severity.
router.get('/severity/:id/delete', severity_controller.severity_delete_get);

// POST request to delete severity.
router.post('/severity/:id/delete', severity_controller.severity_delete_post);

// GET request to update severity.
router.get('/severity/:id/update', severity_controller.severity_update_get);

// POST request to update severity.
router.post('/severity/:id/update', severity_controller.severity_update_post);

// GET request for one severity.
router.get('/severity/:id', severity_controller.severity_detail);

// GET request for list of all severity.
router.get('/severities', severity_controller.severity_list);



module.exports = router;
