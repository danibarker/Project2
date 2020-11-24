const mongoose = require('mongoose');
const validator = require("validator");

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (value.length > 32) {
          throw new Error(
            "Username must be less than 32 characters long"
          );
        }
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email entered");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Virtual for user's full name
//userSchema
//.virtual('name')
//.get(function () {
//  return this.family_name + ', ' + this.first_name;
//});

// Virtual for user's URL
//userSchema
//.virtual('url')
//.get(function () {
//  return '/user/' + this._id;
//});

//Export model
module.exports = mongoose.model('User', userSchema);
