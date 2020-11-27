const { Warning } = require('../models/models');
const debug = require('debug')('mwdb:server');

// Display list of all warnings.
exports.warning_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning list');
};

// Display detail page for a specific warning.
exports.warning_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning detail: ' + req.params.id);
};

// Handle warning create on POST.
exports.warning_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning create POST');
};

// Handle warning delete on POST.
exports.warning_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning delete POST');
};

// Handle warning update on POST.
exports.warning_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warning update POST');
};