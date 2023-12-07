

"use client";


import React from 'react'

// step 11 
 import Link from 'next/link'
 import Image from 'next/image'

 import { useState, useEffect } from 'react'

 /*

   Error Informations :-

   1. 
   Failed to compile

./components\Nav.jsx
ReactServerComponentsError:

You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
Learn more: https://nextjs.org/docs/getting-started/react-essentials

   ╭─[C:\Users\user\Desktop\promptopia\components\Nav.jsx:4:1]
 4 │  import Link from 'next/link'
 5 │  import Image from 'next/image'
 6 │ 
 7 │  import { useState, useEffect } from 'react'
   ·                     ─────────
 8 │ 
 9 │  /*
 9 │ 

   ╰────

Maybe one of these should be marked as a client entry with "use client":
  ./components\Nav.jsx
  ./app\layout.jsx

This error occurred during the build process and can only be dismissed by fixing the error.


   ------------------------

   Solution :-

   The Above Error occurs because when we import [ useEffect, useState ] etc, all those Components which requires Client Side works inside any Files we are suppose to define [ "use client"  ] at the Top of the every files in which we are using this Client side Components 
   If we define [ "use client"; ] this error will be resolved. 


 */




 import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
// end step 11 

const Nav = () => {


    // use login check
    // if you change the [ isUserLoggedIn ] to false or falsy value on the Top right corner [ create post and sign up ] option will not be displayed. 
    // const isUserLoggedIn = true;

    // the below line of code is used to check weather the user has been logged in or not based on it we will allow the user to access the websites.
    const { data: session } = useSession();


    /* 
     Here we will be defining [ getProvider ] component which is used to set up Login and sign-up functionalities


    */


     const [ providers, setProviders ] = useState(null);


     // This below state is to manage the drop-down of the Navbar
     const [ toggleDropdown, setToggleDropdown ] = useState( false );



     useEffect( () => {

        const setUpProviders = async () => {
              // here we have called [ getProviders() ] function which we have imported on the top
            const response = await getProviders();

            setProviders( response );

        }

        setUpProviders( );

     }, [] )



  return (
    // <div>Nav</div>

      // step 12 
    <nav  className='flex-between w-full mb-16 pt-3'  >
        <Link  href="/" className='flex gap-2 flex-center'  >
          

          {/* 
           
           Error :-

           Unhandled Runtime Error

Error: Image with src "/assets/images/logo.svg" is missing required "width" property.
Call Stack
Next.js
renderWithHooks
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (11009:0)
updateForwardRef
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (15665:0)
beginWork$1
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (18408:0)
beginWork
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (26741:0)
performUnitOfWork
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (25587:0)
workLoopSync
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (25303:0)
renderRootSync
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (25258:0)
recoverFromConcurrentError
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (24475:0)
performConcurrentWorkOnRoot
node_modules\next\dist\compiled\react-dom\cjs\react-dom.development.js (24420:0)
workLoop
node_modules\next\dist\compiled\scheduler\cjs\scheduler.development.js (261:0)
flushWork
node_modules\next\dist\compiled\scheduler\cjs\scheduler.development.js (230:0)
performWorkUntilDeadline
node_modules\next\dist\compiled\scheduler\cjs\scheduler.development.js (534:0)


------------------

  Solution :-

   The above error occurs if we fail to provide some mandatory "attributes" for any built-in elements, read the error and define the appropriate 'Attributes'
    The above error comes from [ Image ] tag   
          */}
          
            <Image  
              src="/assets/images/logo.svg" 
              alt='Promptopia Logo'
              width={30}
              height={30}
              className='object-contain'
            />

            <p className='logo_text' > Promptopia </p>
        
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden' >

          {/* { isUserLoggedIn ? (  */}

        { session?.user ?  ( 
         <div className='flex gap-3 md:gap-5' >
         
          {/* The below Link Tag will create a [ Create Post ] navbar on the top right corner of the webpage. */}
          <Link href="/create-prompt"  className='black_btn' > 
          Create Post 
          </Link> 


           {/*  This will display the Sign up button which we can find on the top Right corner of the webpage. */}
          <button type='button' onClick={signOut} className='outline_btn' > 
           Sign Out
          </button>

          {/* Below Link tag is ment to set Profile picture in the Webpage */}

          <Link href="/profile" >
           <Image 
             src={ session?.user.image }
             width={37}
             height={37}
             className='rounded-full'
             alt='profile'
           />
          </Link>

         </div> ) : (

            // Here we are setting up code for google sign-up function
         <>

          {/* Below we are check weather [ providers ] is truthy value, if so then check for [ Object.value( Provider )]  then render the component appropriately. */}

         {
            providers && 
            Object.values( providers ).map((  provider ) => (
                <button
                type="button"
                key={provider.name}
                onClick={() => signIn( provider.id) }
                className='black_btn'
                >

                  Sign In
                </button>
            ) )
         }

         </> )   }

        </div>



        {/* Mobile Navigation */}

        {/* In the below `div` tag we can observe that we use className where we mentioned sm:hidden which means above the small size device this feature will be hidden. */}
        <div className='sm:hidden flex relative' >

            {
                // isUserLoggedIn ? (
                  session?.user ? (
                    <div className='flex' >
                        <Image 
                          src={ session?.user.image }
                          width={37}
                          height={37}
                          className="rounded-full"
                          alt="profile"
                          onClick={ () => setToggleDropdown( (prev)  => !prev ) }
                          /*
                           Error :-
                           Failed to compile

./components/Nav.jsx
Error: 
  × Expression expected
     ╭─[C:\Users\user\Desktop\promptopia\components\Nav.jsx:223:1]
 223 │                           className="rounded-full"
 224 │                           alt="profile"
 225 │                           onClick={ }
 226 │                         />
     ·                         ─
 227 │                     </div>
 228 │                 ) : (
 228 │ 

     ╰────

  × Expression expected
     ╭─[C:\Users\user\Desktop\promptopia\components\Nav.jsx:223:1]
 223 │                           className="rounded-full"
 224 │                           alt="profile"
 225 │                           onClick={ }
 226 │                         />
     ·                          ─
 227 │                     </div>
 228 │                 ) : (
 228 │ 

     ╰────

Caused by:
    Syntax Error

This error occurred during the build process and can only be dismissed by fixing the error.

---------------------

   Solution :-

   this error message says that we are not suppose to have empty [ onClick ] function


                          */

                        />



                        {/* Code related to ToggleDropdown 

                        Do not check the below code from Desktop view, reduce the size of the Webpage to Mobile size then start using the Toggle Menu by clicking on it.
                        
                        
                        */}


                        

                        {
                            toggleDropdown && (
                                <div className="dropdown" >
                                    <Link
                                     href="/profile"
                                     className="dropdown_link"
                                     onClick={() => setToggleDropdown(false)}
                                    >
                                      My Profile   
                                    </Link>

                                    <Link
                                     href="/create-prompt"
                                     className="dropdown_link"
                                     onClick={() => setToggleDropdown(false)}
                                    >
                                      Create Prompt  
                                    </Link>
                                    <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className='mt-5 w-full black_btn'


                                    >

                                         Sign Out

                                    </button>
                                </div>
                            )
                        }


                    </div>
                ) : (

                    <>

          {/* Below we are check weather [ providers ] is truthy value, if so then check for [ Object.value( Provider )]  then render the component appropriately. */}

         {
            providers && 
            Object.values( providers ).map((  provider ) => (
                <button
                type="button"
                key={provider.name}
                onClick={() => signIn( provider.id) }
                className='black_btn'
                >

                Sign In

                </button>
            ) )
         }

         </> )

        }
        </div>
    </nav>
  )
}

export default Nav