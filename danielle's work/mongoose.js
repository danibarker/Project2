const mongoose = require("mongoose");
const { connectionURL } = require('./secrets')
mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});