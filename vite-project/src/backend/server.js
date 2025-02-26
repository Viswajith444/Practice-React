// user: hisoka
// password: K25jAtWkja68k0pw

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB

mongoose
  // .connect("mongodb://localhost:27017/sjit")
  // eslint-disable-next-line no-undef
  .connect(process.env.LOCAL_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));


// let schema = new mongoose.Schema({
//     name: String,
//     age : Number,
// })

// const sjit = new mongoose.model("", schema, "sjit");
// let x = await sjit.find();
// console.log(x);


// Define a sample API route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.get("/lol", (_, res) =>{
    res.send("😁😁😁😁");
})

// Start the server
// const PORT = process.env.PORT || 5000;

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
