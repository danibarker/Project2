const mongoose = require("mongoose");
const { env } = require("process");
const connectionURL = 'mongodb+srv://admin:KDCYfjlXj8Qg0eTp@cluster0.wpqc6.mongodb.net/media-warnings?retryWrites=true&w=majority';
mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

process.env.connectionURL