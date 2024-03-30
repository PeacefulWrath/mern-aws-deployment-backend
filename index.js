const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
res.json({
    message:"get request working"
})
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});