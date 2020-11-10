const mongoose = require('mongoose');

const schema = mongoose.Schema;

const typeSchema = new schema(
  {
    id: { type: String, required: true },
    type: { type: String, required: true }
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