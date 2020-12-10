let express = require('express');
let router = express.Router();
const auth = require("../middleware/auth");
// Require controller modules.
let movie_controller = require('../controllers/movieController');
let user_controller = require('../controllers/userController');
let warning_controller = require('../controllers/warningController');
let category_controller = require('../controllers/categoryController');
let frequency_controller = require('../controllers/frequencyController');
let type_controller = require('../controllers/typeController');
let severity_controller = require('../controllers/severityController');


// ***********************************
//  MOVIE ROUTES 
// ***********************************

// POST request for creating Movie.
router.post('/movie/create', movie_controller.movie_create_post);

// POST request to delete Movie.
router.post('/movie/delete', auth, movie_controller.movie_delete_post);

// POST request to update Movie.
router.post('/movie/update', auth, movie_controller.movie_update_post);

// GET request for one Movie.
router.get('/movie/:tmdb', movie_controller.movie_detail);

// GET request for list of all Movie items.
router.get('/movies', movie_controller.movie_list);

// ***********************************
//  USER ROUTES 
// ***********************************

// POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// POST request to delete user.
router.post('/user/delete', auth, user_controller.user_delete_post);

// POST request to update user.
router.post('/user/update', auth, user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', auth, user_controller.user_detail);

// GET request for list of all users.
router.get('/users', auth, user_controller.user_list);

// POST request for login
router.post('/user/login', user_controller.user_login);

// POST request for logout
router.post('/user/logout', auth, user_controller.user_logout);

// ***********************************
//  WARNING ROUTES
// ***********************************

//POST request for creating warning.
router.post('/warning/create', auth, warning_controller.warning_create_post);

// POST request to delete warning.
router.post('/warning/delete', auth, warning_controller.warning_delete_post);

// POST request to update warning.
router.post('/warning/update', auth, warning_controller.warning_update_post);

// GET request for one warning.
router.get('/warning/:id', warning_controller.warning_detail);

// GET request for list of all warning.
router.get('/warnings', warning_controller.warning_list);

// ***********************************
//  CATEGORY ROUTES
// ***********************************

// POST request for creating category. 
router.post('/category/create', auth, category_controller.category_create_post);

// POST request to delete category.
router.post('/category/delete', auth, category_controller.category_delete_post);

// POST request to update category.
router.post('/category/update', auth, category_controller.category_update_post);

// GET request for one category.
router.get('/category/:title', category_controller.category_detail);

// GET request for list of all category.
router.get('/categories', category_controller.category_list);

// ***********************************
//  FREQUENCY ROUTES
// ***********************************

// POST request for creating frequency. 
router.post('/frequency/create', auth, frequency_controller.frequency_create_post);

// POST request to delete frequency.
router.post('/frequency/delete', auth, frequency_controller.frequency_delete_post);

// POST request to update frequency.
router.post('/frequency/update', auth, frequency_controller.frequency_update_post);

// GET request for one frequency.
router.get('/frequency/:title', frequency_controller.frequency_detail);

// GET request for list of all frequency.
router.get('/frequencies', frequency_controller.frequency_list);

// ***********************************
//  TYPES ROUTES
// ***********************************

// POST request for creating type. 
router.post('/type/create', auth, type_controller.type_create_post);

// POST request to delete type.
router.post('/type/delete', auth, type_controller.type_delete_post);

// POST request to update type.
router.post('/type/update', auth, type_controller.type_update_post);

// GET request for one type.
router.get('/type/:title', type_controller.type_detail);

// GET request for list of all type.
router.get('/types', type_controller.type_list);

// ***********************************
//  SEVERITY ROUTES
// ***********************************

// POST request for creating severity. 
router.post('/severity/create', auth, severity_controller.severity_create_post);

// POST request to delete severity.
router.post('/severity/delete', auth, severity_controller.severity_delete_post);

// POST request to update severity.
router.post('/severity/update', auth, severity_controller.severity_update_post);

// GET request for one severity.
router.get('/severity/:title', severity_controller.severity_detail);

// GET request for list of all severities.
router.get('/severities', severity_controller.severity_list);


// export the router
module.exports = router;