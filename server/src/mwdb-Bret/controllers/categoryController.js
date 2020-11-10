const Category = require('../models/category');

// Display list of all categories.
exports.category_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Category list');
};

// Display detail page for a specific category.
exports.category_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Category detail: ' + req.params.id);
};

// Display category create form on GET.
exports.category_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category create GET');
};

// Handle category create on POST.
exports.category_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Category create POST');
};

// Display category delete form on GET.
exports.category_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category delete GET');
};

// Handle category delete on POST.
exports.category_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Category delete POST');
};

// Display category update form on GET.
exports.category_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Category update GET');
};

// Handle category update on POST.
exports.category_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Category update POST');
};