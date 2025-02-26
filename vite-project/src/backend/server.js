import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/sjit")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));


let schema = new mongoose.Schema({
    name: String,
    age : Number,
})

const sjit = new mongoose.model("sjit", schema);
let a = new sjit({name: "Bob"});
console.log(a);
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
