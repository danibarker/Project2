const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    id: { type: String, required: true },
    first_name: { type: String, required: true, maxlength: 100 },
    family_name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true }
  }
);

// Virtual for user's full name
userSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for user's URL
userSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', userSchema);
