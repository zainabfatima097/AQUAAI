const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// POST endpoint to register a volunteer
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create a new volunteer
    const volunteer = new Volunteer({ name, email });
    await volunteer.save();

    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error registering volunteer", error: err });
  }
});

module.exports = router;
