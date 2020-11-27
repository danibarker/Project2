const { Frequency } = require('../models/models');
const debug = require('debug')('mwdb:server');


// Display list of all frequencies.
exports.frequency_list = async function(req, res) {
  // an array of entries is returned
  const frequencyEntries = await Frequency.find();
  if ( frequencyEntries != null ) {
    debug(`Success: severities found: ${frequencyEntries}`);  // success
    res.status(200).json(frequencyEntries);
  } else {
    debug(`Error: cannot find frequencies: ${frequencyEntries}`);  // failure
    res.sendStatus(400);
  }
};

// Display detail page for ONE frequency.
exports.frequency_detail = async function(req, res) {
  const freq = req.body.frequency
  debug(`Find single frequency: ${freq}`);
  // an object is returned
  const response = await Frequency.findOne( { frequency: freq });
  if ( response != null ) {
    debug(`Found frequency: ${freq}`);
    debug(`Find frequency result: ${response}`);
    res.status(200).json(response);
  } else {
    debug(`Error: cannot find frequency: ${freq}`);
    res.sendStatus(400);
  }
};

// Handle frequency create on POST.
exports.frequency_create_post = async function(req, res) {
  const newFrequency = req.body.frequency;
  debug(`newFrequency: ${newFrequency}`);
  const newRecord = {
    "frequency": newFrequency
  }
  debug(`newRecord: ${newRecord}`);
  
  // add new record to database
  await Frequency.create(newRecord).then((result) => {
    debug(`Success: severity created: ${newFrequency}`);  // success
    debug(`Create frequency response: ${result}`);
    res.status(200).json(result);
  }).catch((error) => {
    debug(`Error: unable to create frequency: ${newFrequency}`);  // failure
    debug(`Error: frequency error: ${error}`);
    res.status(500).json(error);
  })  
};

// Handle frequency delete on POST.
exports.frequency_delete_post = async function(req, res) {
  const freq = req.body.frequency
  debug(`Deleting Frequency: ${freq}`)
  
  // delete a single entry
  const response = await Frequency.deleteOne({ frequency: freq });
  const result = JSON.stringify(response);
  
  if (response.deletedCount != 0) {
    debug(`Success: frequency deleted: ${freq}`);  // success
    debug(`Delete frequency response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to delete frequency: ${result}`);  // failure
    res.status(500).json(response);
  }
};

// Handle frequency update on POST.
exports.frequency_update_post = async function(req, res) {
  const oldfreq = req.body.oldFrequency
  const newfreq = req.body.newFrequency
  debug(`old and new: ${oldfreq}, ${newfreq}`)
  const response = await Frequency.updateOne({
    frequency: oldfreq
  },
  {
    $set: {
      frequency: newfreq
    }
  })
  
  const result = JSON.stringify(response);
  
  if (response.nModified != 0) {
    debug(`Success: frequency updated: ${oldfreq} to ${newfreq}`);
    debug(`Update frequency response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to update frequency: ${result}`)
    res.status(500).json(response)
  }
};
