const express = require("express");
const { getAll, create } = require("./model");
const { bodyController } = require("./middleware");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let query = await getAll();
    res.status(200).json(query);
  } catch (e) {
    next(e);
  }
});

router.post("/", bodyController, async (req, res, next) => {
  try {
    let query = await create(req.body);
    res.status(201).json(query);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
