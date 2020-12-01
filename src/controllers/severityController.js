const { Severity } = require('../db/models');
const debug = require('debug')('mwdb:server');


// Display list of all severities.
exports.severity_list = async function(req, res) {
  // an array of entries is returned
  const severityEntries = await Severity.find();
  if ( severityEntries != null ) {
    debug(`Success: severities found: ${severityEntries}`);  // success
    res.status(200).json(severityEntries);
  } else {
    debug(`Error: cannot find severities: ${severityEntries}`);  // failure
    res.sendStatus(400)
  }
};

// Display detail page for ONE severity.
exports.severity_detail = async function(req, res) {
  const sev = req.params.severity;
  debug(`Find single severity: ${sev}`);
  // an object is returned
  const response = await Severity.findOne( { severity: sev });
  if ( response != null ) {
    debug(`Found severity: ${sev}`);
    debug(`Find severity result: ${response}`);
    res.status(200).json(response);
  } else {
    debug(`Error: cannot find severity: ${sev}`);
    res.sendStatus(400)
  }
};

// Handle severity create on POST.
exports.severity_create_post = async function(req, res) {
  const newSeverity = req.body.severity;
  const newValue = req.body.value
  debug(`newSeverity : ${newSeverity}`);
  const newRecord = {
    "title": newSeverity,
    "value": newValue
  }
  debug(`newRecord: ${newRecord}`);
  
  // add new record to database
  await Severity.create(newRecord).then((result) => {
    debug(`Success: severity created: ${newSeverity}`);  // success
    debug(`Create severity response: ${result}`);
    res.status(200).json(result);
  }).catch((error) => {
    debug(`Error: unable to create severity: ${newSeverity}`);  // failure
    debug(`Error: severity error: ${error}`);
    res.status(500).json(error);
  })
};

// Handle severity delete on POST.
exports.severity_delete_post = async function(req, res) {
  const sev = req.params.severity;
  debug(`Deleting Severity: ${sev}`);
  
  // delete a single entry
  const response = await Severity.deleteOne({ severity: sev });
  const result = JSON.stringify(response);
  
  if (response.deletedCount != 0) {
    debug(`Success: severity deleted: ${sev}`);  // success
    debug(`Delete severity response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to delete severity: ${result}`);  // failure
    res.status(500).json(response);
  }
};

// Handle severity update on POST.
exports.severity_update_post = async function(req, res) {
  const oldsev = req.params.oldSeverity;
  const newsev = req.params.newSeverity;
  debug(`old and new: ${oldsev}, ${newsev}`);
  const response = await Severity.updateOne({
    severity: oldsev
  },
  {
    $set: {
      severity: newsev
    }
  })
  
  const result = JSON.stringify(response);
  
  if (response.nModified != 0) {
    debug(`Success: severity updated: ${oldsev} to ${newsev}`)
    debug(`Update severity response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to update severity: ${result}`)
    res.status(500).json(response)
  }
};
