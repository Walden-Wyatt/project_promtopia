



 // here we are using client directives because this file has browser/client side work.
 "use client";


import React from 'react'


// let us import { SessionProvider } 

 import { SessionProvider } from 'next-auth/react'

const Provider = ( { children, session } ) => {
  return (
    <SessionProvider  session={session} > 
     { children }
    </SessionProvider>
  )
}

export default Provider


