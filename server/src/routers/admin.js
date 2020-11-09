const express = require("express");
// const auth = require("../middleware/auth");
const { Category, User} = require("../db/models")
const router = new express.Router();

router.post("/addCategory", auth, async (req, res) => {
    const category = new Category({
        ...req.body,
    });

    try {
        await category.save();
        res.status(201).send(category);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.post('/removeUser', auth, async (req, res) => {
    const userID  = req.body
    const deleted = await User.findOneAndDelete({ _id: userID })
    res.send(deleted);
})
module.exports = router;