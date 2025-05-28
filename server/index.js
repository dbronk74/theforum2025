require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const sampleRoutes = require("./routes/sample");

// Load .env
dotenv.config();

// ✅ Debugging: Check if .env is loading
console.log("🔑 Loaded OpenAI Key:", process.env.OPENAI_API_KEY ? "✅ Present" : "❌ Missing");

// Create express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api", sampleRoutes);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`⚡️ Server running on http://localhost:${PORT}`);
});
