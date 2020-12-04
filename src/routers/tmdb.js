const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");

const { apiKey } = process.env.TMDB_API_KEY ? { apiKey: process.env.TMDB_API_KEY } : require("./api-key");

router.get("/popularMovies", async (req, res) => {
    console.log(apiKey)
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const popularMovies = await response.json()
    res.send(popularMovies)
});
router.get("/findMovie", async (req, res) => {
    const { searchValue } = req.query;
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    console.log(searchURL);
    try {
        const searchResults = await fetch(searchURL, { method: "GET" });
        const result = await searchResults.json();
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});
router.get("/getMovie", async (req, res) => {
    const { tmdb } = req.query;
    const searchURL = `https://api.themoviedb.org/3/movie/${tmdb}?api_key=${apiKey}`;
    try {
        const searchResults = await fetch(searchURL, { method: "GET" });
        const result = await searchResults.json();
        res.send(result);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;
