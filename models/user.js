

 // This file contains all the Schema related codes such
 // Schemas are nothing but the format on how the data has to be stored inside the database.

 import { Schema, model, models } from "mongoose";

//  import { connectToDB } from "@utils/database";
//  connectToDB();


 const UserSchema = new Schema( {
    email: {
        type: String,
        unique: [ true, 'Email already exits!'],
        required: [ true, 'Email is required'],
    },

    username: {
        type: String,
        required: [ true, 'Username is required!'],
        // match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
        match: [/^[a-zA-Z0-9_]{1,20}$/, "Username invalid, it should contain 1-20 alphanumeric letters, underscores, or dots!"]

    },

    image: {
        type: String,
    }
 })




  /* 
   Here in the below code we are checking for User weather it is existing or not
    if exits do not create new Model ( Documents ) inside the MongoDB 
    if not exits create a New model( documents ) inside the MongoDB.
   */



    /*

     Error :-

     1. 
     TypeError: mongoose__WEBPACK_IMPORTED_MODULE_0__.models is undefined
Source

models\user.js (38:15) @ models

  36 |  * /
  37 |
  > 38 | const User = models.User || model("User" , UserSchema );


    ------------------------


    Solution :-

    The above error occurs when we use [  models.User || ] in the below code, please do not use it.



    */


  const User =  /* models.user || */  model("User" , UserSchema );

//    Finally we are exporting the Models.
  export default User;







