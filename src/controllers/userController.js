const { User } = require('../db/models');
const debug = require('debug')('mwdb:server');


// Display list of all users.
exports.user_list = async function(req, res) {
  // an array of entries is returned
  const userEntries = await User.find();
  if ( userEntries != null ) {
    debug(`Success: users found: ${userEntries}`);  // success
    res.status(200).json(userEntries);
  } else {
    debug(`Error: cannot find users: ${userEntries}`);  // failure
    res.sendStatus(400);
  }
};

// Display detail page for ONE user.
exports.user_detail = async function(req, res) {
  const user = req.body.username;
  debug(`Find single user: ${user}`);
  // an object is returned
  const response = await User.findOne( { username: user });
  if ( response != null ) {
    debug(`Found user: ${user}`);
    debug(`Find user result: ${response}`);
    res.status(200).json(response);
  } else {
    debug(`Error: cannot find user: ${user}`);
    res.sendStatus(400)
  }
};

// Handle user create on POST.
exports.user_create_post = async function(req, res) {
  const newUser = JSON.parse(JSON.stringify(req.body))
  debug(`newuser ${newUser}`)
  
  const newRecord = {
    "username": newUser.username,
    "email": newUser.email,
    "password": newUser.password,
    "tokens": [ { "token": newUser.token } ]
  }
   debug(`newRecord: ${newRecord}`)

  // add new record to database
  // result is the new record
  await User.create(newRecord).then((result) => {
    debug(`Success: severity created: ${newRecord}`);  // success
    debug(`Create user response: ${result}`)
    res.status(200).json(result);
  }).catch((error) => {
    debug(`Error: unable to create user: ${newUser}`);  // failure
    debug(`Error: user error: ${error}`)
    res.status(500).json(error);
  })
};

// Handle user delete on POST.
exports.user_delete_post = async function(req, res) {
  const user = req.body.username;
  debug(`Deleting User: ${user}`);
  
  // the commented code below is supposed to work based on examples
  // on the Internet, but it always returned ok even if the user didn't exist
  // I would like to find out why it doesn't work.
  //
  // delete a single entry
//  await User.deleteOne({ username: user })
//    .then((result) => {
//      console.log("User deleted: ", user); // success
//      res.status( 200 ).json({ success: 'User ' + user + ' deleted from MongoDb'});
//    })
//    .catch((error) => {
//      console.log(error)  // failure
//      res.status( 500 ).json({ error: 'Unable to delete ' + user})
//    })
  
  // delete a single entry
  const response = await User.deleteOne({ username: user });
  const result = JSON.stringify(response);
  
  if (response.deletedCount != 0) {
    debug(`Success: user deleted: ${user}`);  // success
    debug(`Delete user response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to delete user: ${result}`);  // failure
    res.status(500).json(response);
  }
};

// Handle user update on POST.
exports.user_update_post = async function(req, res) {
  const userObj = JSON.parse(JSON.stringify(req.body))
  debug(`User ${userObj}`)
  const user = userObj.username
  
  const response = await User.updateOne({
    username: user
  },
  {
    $set: userObj
    }
  )
  
  const result = JSON.stringify(response);
  debug(`response ${response}`)
  
  if (response.nModified != 0) {
    
    debug(`Success: user updated: ${user}`);
    debug(`Update user response: ${result}`);
    res.status(200).json(response);
  } else {
    debug(`Error: unable to update user: ${result}`);
    res.status(500).json(response)
  }
  
};