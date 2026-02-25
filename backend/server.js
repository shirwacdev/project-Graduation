const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(express.json());


const AdminRoutes = require("./routes/AdminRoutes");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Database Connected");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });


app.get("/api", (req, res) => {
  res.send("Hello My Team");
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
