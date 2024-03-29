import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Name can't be empty"]
     },
     email: {
          type: String,
          required: [true, "Need Email"],
          unique:true
     },
     password: {
          type: String,
          required: true,
          minlength: 6,
        
     },
     blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }]


})



export default mongoose.model("User", UserSchema);