


// This File is a Profile file which will have all the datas related to Profile of the User

// This File is a Client side file so we will be using [ 'use client' ] derectives
'use client';


// import React from 'react'


import { useEffect, useState } from "react";

import { useSession  } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {

  const router = useRouter();

    const { data: session } = useSession();

    const [ posts, setPosts ] = useState([]);

    useEffect( () => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts( data );
        }
    
        fetchPosts();
    
      }, [] );




    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

      if( hasConfirmed ) {
        try {
          // here we have are getting the data from mongodb and deleting the prompt which has been requested for.
          await fetch( `/api/prompt/${post._id.toString()}`, {
            method: 'DELETE'
          } );
          
          const filteredPosts = posts.filter( (p) => p._id !== post._id  );

          setPosts( filteredPosts );

        } catch( error ) {
          // console.log( error );
          console.log( "Post Not Deleted")
        }
      }
    }

  return (

    <Profile 
      name="My"
      desc="Welcome to your personalized profile page"

      // do not pass array as a value for [ data ] property
      // data={ [ posts ] }
      data={ posts }
      handleEdit={ handleEdit }
      handleDelete={ handleDelete }
    />

  )
}

export default MyProfile



