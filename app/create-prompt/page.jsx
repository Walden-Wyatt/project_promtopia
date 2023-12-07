

'use client';

// To manage the state.
import { useState } from "react";

// this allows us to know which user is currently logged in
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { sendError } from "next/dist/server/api-utils";
import User from "@models/user";
 
 


const CreatePrompt = () => {


    // Here we have invoked [ useRouter ]
    const router = useRouter();
    const { data: session } = useSession();

    // here let us create a State where we can store the prompt datas

    const [ submitting, setSubmitting ] = useState( false );
    const [ post, setPost ] = useState({
        prompt: '',
        tag: '',
    })


    // here we have [ createPrompt ] function

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        /*
         Here we are pushing our code these API [ api/prompt/new ]
          Here we are actually sending out code to the Backend ( The same thing will done using Express server, controller, model, etc ).

         */
         try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    // userId: sendError.user.id,
                    userId: session?.user.id,
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
            setSubmitting(false)
        }
    }

  return (

    // Tips :- [Alt + double click words ] will allow us to copy the multiple words at a time
    <Form 
     type="Create"
     post={post}
     setPost={setPost}
     submitting={submitting}
     handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt













