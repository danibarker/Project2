#! /usr/bin/env node

console.log('This script populates some test movies, users, warnings, categories, severities, frequencies and type to the mwdb database. Specified database as argument - e.g.: populatedb mongodb://127.0.0.1:27017/');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async')
const Movie = require('./models/movie')
const User = require('./models/user')
const Warning = require('./models/warning')
const Category = require('./models/category')
const Frequency = require('./models/frequency')
const Type = require('./models/type')
const Severity = require('./models/severity')


const mongoose = require('mongoose');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let users = []
let movies = []
let warnings = []
let categories = []
let types = []
let frequencies = []
let severities = []

// Create a user entry
function userCreate(first_name, family_name, email, cb) {
  userdetail = {first_name:first_name , family_name: family_name, email: email }
  
  const user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      console.log('ERROR CREATING User: ' + user);
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}

// Create a warning entry
function warningCreate(movie, user, category, frequency, type, severity, description, cb) {
  
  const warning = new Warning({ movie: movie, user: user, category: category, frequency: frequency,
                            type: type, severity: severity, description: description });
       
  warning.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Warning: ' + warning);
      cb(err, null);
      return;
    }
    console.log('New Warning: ' + warning);
    warnings.push(warning)
    cb(null, warning);
  }   );
}

// Create a movie entry
function movieCreate(title, tmdb_id, cb) {
  moviedetail = { 
    title: title,
    tmdb_id: tmdb_id
  }
      
  const movie = new Movie(moviedetail);    
  movie.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Movie: ' + movie);
      cb(err, null)
      return
    }
    console.log('New Movie: ' + movie);
    movies.push(movie)
    cb(null, movie)
  }  );
}

// Create a category entry
function categoryCreate(title, cb) {  
    
  const category = new Category({ title: title });
  
  category.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Category: ' + category);
      cb(err, null)
      return
    }
    console.log('New Category: ' + category);
    categories.push(category)
    cb(null, category)
  }  );
}

// Create a frequency entry
function frequencyCreate(title, cb) {  
    
  const frequency = new Frequency({ title: title });
  
  frequency.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Frequency: ' + frequency);
      cb(err, null)
      return
    }
    console.log('New Frequency: ' + frequency);
    frequencies.push(frequency)
    cb(null, frequency)
  }  );
}

// Create a type entry
function typeCreate(title, cb) {  
    
  const type = new Type({ title: title });
  
  type.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Type: ' + type);
      cb(err, null)
      return
    }
    console.log('New Type: ' + type);
    types.push(type)
    cb(null, type)
  }  );
}

// Create a severity entry
function severityCreate(title, cb) {  
    
  const severity = new Severity({ title: title });
  
  severity.save(function (err) {
    if (err) {
      console.log('ERROR CREATING Severity: ' + severity);
      cb(err, null)
      return
    }
    console.log('New Severity: ' + severity);
    severities.push(severity)
    cb(null, severity)
  }  );
}

// ********************************************
// populate the collections (tables)
// ********************************************

// populate some users
function createUsers(cb) {
    async.series([
        function(callback) {
          userCreate('Bret', 'Robinson', 'bret@home.org', callback);
        },
        function(callback) {
          userCreate('Danielle', 'Barker', 'danielle@work.org', callback);
        },
        function(callback) {
          userCreate('Liliana', 'Zuleta', 'liliana@homme.org', callback);
        },
        function(callback) {
          userCreate('Fernando', 'Cerda', 'fernanado@work.org', callback);
        },
        function(callback) {
          authorCreate('Mickey', 'Mouse', 'mickey@looney.org', callback);
        }
        ],
        // optional callback
        cb);
}

// populate some movies 
function createMovies(cb) {
    async.parallel([
        function(callback) {
          movieCreate('Titanic', '9781473211896', callback);
        },
        function(callback) {
          movieCreate("Mad Max", '9788401352836', callback);
        }
        ],
        // optional callback
        cb);
}

// populate some warnings
function createWarnings(cb) {
    async.parallel([
        function(callback) {
          warningCreate(movie_id, user_id, category_id, 10, type_id, severity_id, 'Course Language', callback)
        },
        function(callback) {
          warningCreate(movie_id, user_id, category_id, 10, type_id, severity_id, 'Nudity', callback),
        }
        ],
        // Optional callback
        cb);
}

// populate some categories 
function createCategories(cb) {
    async.parallel([
        function(callback) {
          categoryCreate('Course Language', callback);
        },
        function(callback) {
          categoryCreate('Nudity', callback);
        }
        ],
        // optional callback
        cb);
}

// populate some frequencies 
function createFrequencies(cb) {
    async.parallel([
        function(callback) {
          frequencyCreate('None', callback);
        },
        function(callback) {
          frequencyCreate('Mild', callback);
        },
        function(callback) {
          frequencyCreate('Moderate', callback);
        },
        function(callback) {
          categoryCreate('Severe', callback);
        }
        ],
        // optional callback
        cb);
}

// populate some types 
function createTypes(cb) {
    async.parallel([
        function(callback) {
          typeCreate('Cartoon', callback);
        },
        function(callback) {
          typeCreate('Stop Action', callback);
        }
        ],
        // optional callback
        cb);
}

// populate some severities 
function createSeverities(cb) {
    async.parallel([
        function(callback) {
          severityCreate('Unknown', callback);
        },
        function(callback) {
          severityCreate('Unknown 2', callback);
        }
        ],
        // optional callback
        cb);
}

async.series([
    createUsers,
    createMovies,
    createWarnings,
    createCategories,
    createFrequencies,
    createTypes,
    createSeverities
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Movies: '+ movies);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




