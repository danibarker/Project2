const mongoose = require('mongoose');

const schema = mongoose.Schema;

const severitySchema = new schema(
  {
    id: { type: String, required: true },
    severity: { type: String, required: true }
  }
);

// Virtual for severity's URL
severitySchema
.virtual('url')
.get(function () {
  return '/severity/' + this._id;
});

//Export model
module.exports = mongoose.model('Severity', severitySchema);