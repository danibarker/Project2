const { Warning } = require('../db/models');
const debug = require('debug')('mwdb:server');

// Display list of all warnings.
exports.warning_list = async function (req, res) {
    console.log(req.query)
    const warningEntries = await Warning.find(req.query);
    if (warningEntries != null) {
        debug(`Success: warnings found: ${warningEntries}`);  // success
        res.status(200).json(warningEntries);
    } else {
        debug(`Error: cannot find warnings: ${warningEntries}`);  // failure
        res.sendStatus(400)
    }
};

// Query warnings
exports.warning_detail = async function (req, res) {
    let query = req.query
    let results = await Warning.find(query)
    if (results) {
        debug(`Success: types found: ${results}`);  // success
        res.status(200).json(results);
    } else {
        debug(`Error: cannot find types: ${results}`);  // failure
        res.sendStatus(400)
    }
};

// Handle warning create on POST.
exports.warning_create_post = async function (req, res) {
    const newWarning = req.body.warning
    debug(`newWarning ${newWarning}`)
    const newRecord = newWarning
    debug(`newRecord: ${newRecord}`);

    // add new record to database
    try {
        let newWarnings = new Warning(newRecord)
        let response = await newWarnings.save()
        res.status(200).json(response);
    } catch (error) {
        debug(`Error: unable to create warning: ${newWarning}`);  // failure
        debug(`Error: warning error: ${error}`);
        console.log(error)
        res.status(500).json(error);
    }
};

// Handle warning delete on POST.
exports.warning_delete_post = async function (req, res) {
    const warning = req.body.warning
    debug(`Deleting Frequency: ${warning}`)

    // delete a single entry
    const response = await Warning.findOneAndDelete(warning);
    const result = JSON.stringify(response);

    if (response.deletedCount != 0) {
        debug(`Success: warning deleted: ${warning}`);  // success
        debug(`Delete warning response: ${result}`);
        res.status(200).json(response);
    } else {
        debug(`Error: unable to delete warning: ${result}`);  // failure
        res.status(500).json(response);
    }
};

// Handle warning update on POST.
exports.warning_update_post = async function (req, res) {
    const oldWarning = req.body.oldWarning
    const newWarning = req.body.newWarning
    debug(`old and new: ${oldWarning}, ${newWarning}`)
    const response = await Warning.updateOne(
        oldWarning
    ,
        {
            $set: newWarning
        })

    const result = JSON.stringify(response);

    if (response.nModified != 0) {
        debug(`Success: warning updated: ${oldWarning} to ${newWarning}`);
        debug(`Update warning response: ${result}`);
        res.status(200).json(response);
    } else {
        debug(`Error: unable to update warning: ${result}`)
        res.status(500).json(response)
    }
};