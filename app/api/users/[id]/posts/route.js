
 
 
 // This file is linked to code which is present inside [ models/prompt.js ] file
 import { connectToDB } from "@utils/database";

 // Here we have Route for [ Prompt ] datas 
 import Prompt from "@models/prompt";


 export const GET = async ( request, { params } ) => {
    try{
        await connectToDB();

        const prompts = await Prompt.find({ 
            creator: params.id
         }).populate('creator');

        return new Response( JSON.stringify(prompts) , {
            status: 200
        } )
    }
    catch ( error ) {
        return new Response( "Failed to fetch all prompts" , { status: 500 } )
    }
 }



















