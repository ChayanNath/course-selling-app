const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/course");

app.use("/api/auth", authRoutes);

app.use("/api/course", courseRoutes);

app.listen(process.config.PORTb || 3000, () =>
  console.log("Server started on port 3000")
);
