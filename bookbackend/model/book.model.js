import mongoose from "mongoose";
const bookSchema=mongoose.Schema({
  name:String,
  title:String,
  price:Number,
  category:String
});
// create model of that schema
const Book=mongoose.model("Book",bookSchema);// data from bookschema stored in Book
export default Book;