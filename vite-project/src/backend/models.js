import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
// .connect("mongodb://localhost:27017/sjit")
// eslint-disable-next-line no-undef
.connect(process.env.MONGO_URI + "sample_mflix")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

let schema = new mongoose.Schema({
    name: String,
    age : Number,
  })

const req_data = mongoose.model("", schema, "theaters");

export default req_data;
// module.exports = req_data;