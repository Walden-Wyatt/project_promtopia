

/*
 Here we have Codes related to Database this includes 
 
   a. connection string 
   b. mongoDB and Mongoose codes

 */


   import mongoose from "mongoose";

   let isConnected = false; //track the connection

   export const connectToDB = async () => {

    // we used the below line of code just to Overcome the error, if we fail to use an error message will be displayed.
    mongoose.set( 'strictQuery', true );


    // Here below we check weather the mongoDB is connected if Yes, below [ if ] block statement will be executed 
    

    if( isConnected ) {
        console.log( 'MongoDB is already connected' );
        return
    }

    // If not connected successfully below try and catch block will be executed where we will be creating the connection.

    try {
        await mongoose.connect( process.env.MONGODB_URI, {

            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,

        } )

        isConnected = true;

        console.log( 'MongoDB connected' )

    } catch( error ) {
        console.log( error );
    }


    }



