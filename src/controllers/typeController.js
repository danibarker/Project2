const { Type } = require('../db/models');
const debug = require('debug')('mwdb:server');


// Display list of all types.
exports.type_list = async function(req, res) {
  // an array of entries is returned
  const typeEntries = await Type.find();
  if ( typeEntries != null ) {
    debug(`Success: types found: ${typeEntries}`);  // success
    res.status(200).json(typeEntries);
  } else {
    debug(`Error: cannot find types: ${typeEntries}`);  // failure
    res.sendStatus(400)
  }
};

// Display detail page for ONE type.
exports.type_detail = async function(req, res) {
  const t = req.body.type;
  debug(`Find single type: ${t}`);
  // an object is returned
  const response = await Type.findOne( { type: t })
  if ( response != null ) {
    debug(`Found type: ${t}`);
    debug(`Find type result: ${response}`);
    res.status(200).json(response);
  } else {
    debug(`Error: cannot find type: ${t}`);
    res.sendStatus(400)
  }
};

// Handle type create on POST.
exports.type_create_post = async function(req, res) {
  const newType = req.body.type
  debug(`newType ${newType}`)
  const newRecord = {
    "title": newType
  }
  debug(`newRecord: ${newRecord}`);
  
  // add new record to database
  await Type.create(newRecord).then((result) => {
    debug(`Success: type created: ${newType}`);  // success
    debug(`Create type response: ${result}`);
    res.status(200).json(result);
  }).catch((error) => {
    debug(`Error: unable to create type: ${newType}`);  // failure
    debug(`Error: type error: ${error}`);
    res.status(500).json(error);
  })
};

// Handle type delete on POST.
exports.type_delete_post = async function(req, res) {
  const t = req.body.type
  debug(`Deleting Type: ${t}`);
  
  // delete a single entry
  const response = await Type.deleteOne({ type: t });
  const result = JSON.stringify(response);
  
  if (response.deletedCount != 0) {
    debug(`Success: type deleted: ${t}`);  // success
    debug(`Delete type response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to delete type: ${result}`);  // failure
    res.status(500).json(response);
  }
};

// Handle type update on POST.
exports.type_update_post = async function(req, res) {
  const oldtype = req.body.oldtype
  const newtype = req.body.newtype
  debug(`old and new: ${oldtype}, ${newtype}`);
  const response = await Type.updateOne({
    type: oldtype
  },
  {
    $set: {
      type: newtype
    }
  })
  
  const result = JSON.stringify(response);
  
  if (response.nModified != 0) {
    debug(`Success: type updated: ${oldtype} to ${newtype}`)
    debug(`Update type response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to update type: ${result}`)
    res.status(500).json(response)
  }

};