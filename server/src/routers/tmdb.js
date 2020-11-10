const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");
const {apiKey} = require("./apikey");


router.get("/findMovie", async (req, res) => {
    const {searchValue} = req.query;
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    console.log(searchURL);
    try {
      const searchResults = await fetch(
        searchURL,
        { method: "GET" }
      );
      const result = await searchResults.json();
      res.send(result);
    } catch(err) {
      console.log(err);
    }
  });

  module.exports = router;