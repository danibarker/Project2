const Warning = require('../models/warning');

// Display list of all warnings.
exports.warning_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning list');
};

// Display detail page for a specific warning.
exports.warning_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning detail: ' + req.params.id);
};

// Display warning create form on GET.
exports.warning_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning create GET');
};

// Handle warning create on POST.
exports.warning_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning create POST');
};

// Display warning delete form on GET.
exports.warning_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning delete GET');
};

// Handle warning delete on POST.
exports.warning_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning delete POST');
};

// Display warning update form on GET.
exports.warning_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning update GET');
};

// Handle warning update on POST.
exports.warning_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning update POST');
};