const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes.js");

dotenv.config();
connectDB();
console.log("Loaded MONGO_URI =", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(bodyParser.json());


console.log("MONGO_URI =", process.env.MONGO_URI);


// Routes
app.use("/api/properties", propertyRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
