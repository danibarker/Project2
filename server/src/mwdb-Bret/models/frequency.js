const mongoose = require('mongoose');

const schema = mongoose.Schema;

const frequencySchema = new schema(
  {
    frequency: { type: String, required: true, unique: true }
  }
);

// Virtual for frequency's URL
frequencySchema
.virtual('url')
.get(function () {
  return '/frequency/' + this._id;
});

//Export model
module.exports = mongoose.model('Frequency', frequencySchema);