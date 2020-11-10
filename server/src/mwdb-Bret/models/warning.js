const mongoose = require('mongoose');

const schema = mongoose.Schema;

const warningSchema = new schema(
  {
    id: { type: String, required: true },
    movie: { type: String, required: true }, //reference to the associated movie
    user: { type: String, required: true },
    category: { type: String, required: true },
    frequency: { type: Number, required: true },
    type: { type: String, required: true }, // type of what?
    severity: { type: String, required: true },
    description: { type: String, required: true }
  }
);

// Virtual for warning's URL
warningSchema
.virtual('url')
.get(function () {
  return '/warning/' + this._id;
});

//Export model
module.exports = mongoose.model('Warning', warningSchema);