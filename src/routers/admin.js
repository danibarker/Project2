const express = require("express");
const { Category, User } = require("../db/models")
const router = new express.Router();
const fetch = require("node-fetch");
const apiKey = { apiKey: process.env.TMDB_API_KEY } || require("./api-key");

router.get("/getUsers", async (req, res) => {
    console.log('hey');
    res.send('hey')
});
router.post("/addCategory", async (req, res) => {
    const category = new Category({
        ...req.body,
    });

    try {
        await category.save();
        res.status(201).send(category);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/removeUser', async (req, res) => {
    const userID = req.body
    const deleted = await User.findOneAndDelete({ _id: userID })
    res.send(deleted);
})
module.exports = router;
