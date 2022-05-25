import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({

     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },
     image :{
          type: String
     },
     link: {
          type:String
     },
     user: {
          type: mongoose.Types.ObjectId,
          ref:"User",
          required: true,
         
     }

})
export default mongoose.model("Blog",blogSchema);