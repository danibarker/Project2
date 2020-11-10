const express = require("express");
// const auth = require("../middleware/auth");
const { Category, User } = require("../db/models");
const router = new express.Router();
const fetch = require("node-fetch");
const {apiKey} = require("./apikey");


router.post("/addCategory",  async (req, res) => {
  const category = new Category(req.body);

  try {
    await category.save();
    res.status(201).send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/removeUser",  async (req, res) => {
  const userID = req.body;
  const deleted = await User.findOneAndDelete({ _id: userID });
  res.send(deleted);
});

router.post("/updateCategory",  async (req, res) => {
  const { categoryID, title } = req.body;
  const updated = await Category.updateOne(
    { _id: categoryID },
    { title: title }
  );
  res.send(updated);
});



module.exports = router;
