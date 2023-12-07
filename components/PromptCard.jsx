// import React from 'react'

 "use client";

 import { useState } from "react";
 import Image from "next/image";
 import { useSession } from "next-auth/react";
 import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";



const PromptCard = ( { post, handleTagClick, handleEdit, handleDelete } ) => {

  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();


  // The below state code is for [ Image tag ].
  const [ copied, setCopied ] = useState("");

  // here below we have a function which will be used for coping things to clip-board
  const handleCopy = () => {
    setCopied( post.prompt );
    navigator.clipboard.writeText( post.prompt );
    setTimeout( () => setCopied(false), 3000 );
  }



  return (
    <div className="prompt_card" >
      <div className="flex jsutify-between items-start gap-5" >
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer"  >
          
          <Image  
            src={ post.creator.image }
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col" >
            <h3 className="font-satoshi font-semibold text-gray-900" >  
              { post.creator.username }  
              
            </h3>
            <p className="font-inter text-sm text-gray-500" > 
              { post.creator.email }
             </p>
          </div>
          
        </div>

        <div  className="copy_btn" onClick={ handleCopy } >
          <Image 
          src={ copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg" }
          width={12}
          height={12}
          />
        </div>

      </div>


      {/* The below [ p ] tag will be rendering the prompt data which is very important */}

      <p className="my-4 font-satoshi text-sm texy-gray-700" >  { post.prompt } </p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={ () => handleTagClick && handleTagClick (post.tag) }
      >
        #{ post.tag }
      </p>

      


      { session?.user.id === post.creator._id && pathName === "/profile" && ( 
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'> 
          <p 
          className="font-inter text-sm green_gradient cursor-pointer"
          onClick={handleEdit}
          > 
            Edit 
          </p>

         
          <p 
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={handleDelete}
          > 
            Delete 
          </p>
          </div>
      ) }


    </div>
  )
}

export default PromptCard;