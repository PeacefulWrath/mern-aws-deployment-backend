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
    message:"get request working",
    users:["ram","syam","shiva","durga","radha","hanuman ji"]
})
})

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});