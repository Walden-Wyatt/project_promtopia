


// This File is an API file which will act as Server side, backend and sending as well receiving data from the frontend.

// Here let us set up the authentications 

  import NextAuth from "next-auth";
  import GoogleProvider from 'next-auth/providers/google';


  // Here we are importing the [ Models ]
  import User from "@models/user";



  // here we have an import for the database file which has all database codes.
  import { connectToDB } from '@utils/database';


  /*
  console.log( {
    // for the below properties we have provided values from [env] file where it has google authtications in it.
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})
*/



 console.log( "Hello" );

  const handler = NextAuth( {
    providers: [
        GoogleProvider( {
            // for the below properties we have provided values from [env] file where it has google authtications in it.
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        } )
    ], 
   
    callbacks: { 
    
      async session( { session} ) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn( { profile } ) {
        /* First sign the user in to get the session 
          Every next js rountes are Serverless Routes which this is an Lambda function which opens up only when it is called. every time it spins up the server when it is called 
        */

          try {
            await connectToDB();

            // check weather the User exist 

            const userExists = await User.findOne({
                email: profile.email
            });

            // if not, create a new user.

            if(!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }

            return true;

          } catch( error ) {
            console.log( error );
          }

    } 
  }
    
  } )



  export { handler as GET, handler as POST };





  // For more info on how authentication works in Next js check out this webpage
  // https://nextjs.org/docs/pages/building-your-application/routing/authenticating



  /*

   Error :-

   1/ ./node_modules/bson/lib/bson.mjs Module parse failed: The top-level-await experiment is ot enabled (set experiments.toplevelAwait:true to enabled it)
      Error: The top-level-await experiment is not enabled ( set experiment-topLevelAwait: true to enabled it )


  */





