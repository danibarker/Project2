const mongoose = require('mongoose');

const schema = mongoose.Schema;

const typeSchema = new schema(
  {
    type: { type: String, required: true, unique: true }
  }
);

// Virtual for type's URL
typeSchema
.virtual('url')
.get(function () {
  return '/type/' + this._id;
});

//Export model
module.exports = mongoose.model('Type', typeSchema);