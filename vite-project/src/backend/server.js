// user: hisoka
// password: K25jAtWkja68k0pw

import express from "express";
import cors from "cors";
// import mongoose from "mongoose"
import req_data from "./models.js";

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB

// Define a sample API route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.get("/lol", (_, res) =>{
    res.send("😁😁😁😁");
})

app.post("/:id", async (req, res)=>{
  const {id} = req.params;
  const itsjson = req.body;



  console.log(id);
  console.log(itsjson);
  let x = await req_data.find(itsjson);
  console.log(x);
  res.status(200).send(x);
})


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
