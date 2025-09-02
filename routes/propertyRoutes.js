// const express = require("express");
const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

//post new property
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    const saved = await property.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to add property" });
  }
});

module.exports = router;
