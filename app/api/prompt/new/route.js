
 
 
 // This file is linked to code which is present inside [ models/prompt.js ] file
import { connectToDB } from "@utils/database";

 // Here we have Route for [ Prompt ] datas 
 import Prompt from "@models/prompt";

export const POST = async ( req ) => {
    const { userId, prompt, tag } = await req.json();

    try {

        // this below await code is a Lambda function every time it is called it connects to DB do its job and die 
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })


        await newPrompt.save();

        return new Response( JSON.stringify(newPrompt) , {
            status: 201
        } )
    } catch(error) {

        // if we get error the below code will be executed

        return new Response( "Failed to create a new prompt" , { status: 500 } )

    }
}





