import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
  try{
      const {fullname,email,password}=req.body;
      const user=await User.findOne({email});
      if(user){
        return res.status(400).json({message:"user is already registerd"})
      }
      const hashpassword= await bcryptjs.hash(password,10);
      const createduser=new User({
        fullname:fullname,
        email:email,
        password:hashpassword
      });
     await createduser.save();
      res.status(201).json({message:"user created successsfully",user:{
        fullname:createduser.fullname,
        email:createduser.email,
        _id:createduser._id,
      }})

  }
  catch(error){
    console.log("error is:"+error.message)
      res.status(500).json({message:"internal server error"})
  }
};


export const login=async(req,res)=>{
      try{
          const {email,password}=req.body;
          const user=await User.findOne({email});
          const ismatch=await bcryptjs.compare(password,user.password);
          if(!user || !ismatch){
              return res.status(400).json({message:"invalid credentials"});
          }
          else{

            return res.status(200).json({message:"login successfull", user:{
              _id:user._id,
              fullname:user.fullname,
              email:user.email,
            },
          });
          }
      }
      catch(error){
           console.log("error is: "+error.message);
           res.status(500).json({message:"internal server errrorr"})
      }


};
export default signup;