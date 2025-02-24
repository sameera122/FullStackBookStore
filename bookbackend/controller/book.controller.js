import Book from "../model/book.model.js";

 export const getbook= async(req,res)=>{
  try{
      const book=await Book.find();   //Book.find() ,Book is model or schema
      res.status(200).json(book)
  }
  catch(error){
   console.log("Error:",error);
   res.status(500).json(error);
  }
 } 