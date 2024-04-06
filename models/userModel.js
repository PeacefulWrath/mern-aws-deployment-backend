const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_contact:{type:String,required:true},
    user_details:{type:String,required:true},
    user_explaination:{type:String,required:true},
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", userModel);

module.exports = Projects;