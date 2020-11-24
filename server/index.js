const express = require("express");
require("./src/db/mongoose");
const adminRouter = require("./src/routers/admin");
const tmdbRouter = require("./src/routers/tmdb")
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use('/',express.static('./public'))
app.use('/admin', adminRouter);
app.use('/tmdb', tmdbRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
});
