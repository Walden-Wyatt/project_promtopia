

'use client';

// To manage the state.
import { useState } from "react";

// this allows us to know which user is currently logged in
import { useEffect, /* useSession */ } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { sendError } from "next/dist/server/api-utils";
import User from "@models/user";
 
 


const EditPrompt = () => {


    // Here we have invoked [ useRouter ]
    const router = useRouter();
    const { data: session } = useSession();

    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    // here let us create a State where we can store the prompt datas

    const [ submitting, setSubmitting ] = useState( false );
    const [ post, setPost ] = useState({
        prompt: '',
        tag: '',
    });


    useEffect( () => {

        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompts/${promptId}`)

            const data = await response.json();

            setPost( {
                prompt: data.prompt,
                tag: data.tag,
            })
        }

        if( promptId ) getPromptDetails();

    }, [ promptId ] )


    // here we have [ createPrompt ] function


    

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if( !promptId ) return alert('Prompt ID not found')

        
        /*
         Here we are pushing our code these API [ api/prompt/new ]
          Here we are actually sending out code to the Backend ( The same thing will done using Express server, controller, model, etc ).

         */
         try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    // userId: sendError.user.id,
                    // userId: session?.user.id,
                    tag: post.tag
                })
            } )

            if( response.ok ) {
                router.push('/');
            }

        } catch( error ) {
            console.log( error );
        }
        finally {

        }
    }

    



  return (

    // Tips :- [Alt + double click words ] will allow us to copy the multiple words at a time
    <Form 
     type="Edit"
     post={post}
     setPost={setPost}
     submitting={submitting}
     handleSubmit={ updatePrompt  }
    />
  )
}

export default EditPrompt













