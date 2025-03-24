const express = require("express");
const router = express.Router();
const axios = require("axios");

// POST endpoint for AI detection (image classification)
router.post("/", async (req, res) => {
  const imageUrl = req.body.imageUrl;

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/your-model-name",  // Change this to your Hugging Face model
      { inputs: imageUrl },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error detecting AI:", error);
    res.status(500).json({ message: "Error in AI detection", error });
  }
});

module.exports = router;
