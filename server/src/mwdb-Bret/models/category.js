const mongoose = require('mongoose');

const schema = mongoose.Schema;

const categorySchema = new schema(
  {
    id: { type: String, required: true },
    category: { type: String, required: true }
  }
);

// Virtual for category's URL
categorySchema
.virtual('url')
.get(function () {
  return '/category/' + this._id;
});

//Export model
module.exports = mongoose.model('Category', categorySchema);