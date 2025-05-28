const express = require("express");
const router = express.Router();
const aiGreeting = require("../utils/aiTools");

// ✅ Test route
router.get("/test", (req, res) => {
  res.status(200).json({ message: "✅ Backend is working!" });
});

// 🤖 AI assistant POST route
router.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;
  try {
    const reply = await aiGreeting(prompt);
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: "AI error", details: err.message });
  }
});

module.exports = router;
