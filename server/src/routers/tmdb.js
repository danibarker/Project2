const express = require("express");
const router = new express.Router();
const { apiKey } = require("./api-key");
const Request = require("Request");
const fetch = require("node-fetch");
router.get("/getMovies", async (req, res) => {
    const { searchValue } = req.query;
    
    const requestOptions = {
        method: "GET",
    };
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`,
            requestOptions
        );
        const result = await response.json();
        res.send(result);
    } catch (e) {
        console.log(e);
    }

    
});

router.post("/postMovie", async (req, res) => {
    
})

module.exports = router;
