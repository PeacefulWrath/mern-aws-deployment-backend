const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userModel = require("./models/userModel");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "get request working",
    users: ["ram", "syam", "shiva", "durga", "radha", "hanuman ji"],
  });
});

app.get("/users", async (req, res) => {
  const usersData = await userModel.find()
  // console.log("uuu",usersData);
  if (usersData) {
    return res.status(200).json({
      users: usersData,
    });
  }
  return res.status(400).json({
    message: "error to get users",
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
