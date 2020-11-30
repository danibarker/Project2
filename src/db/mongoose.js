const mongoose = require("mongoose");
const connectionURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/mwdb'
console.log(connectionURL)
mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});
