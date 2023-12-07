

 // here we have css files import statement which will be applicable to this component
 // here we did not specified relative or absolute path, we just used [ @ ] to specify the path.
 import '@styles/globals.css' 

 //-----------------------------------


 // step 10.
 // The reason we are importing [ Nav and Provider ] inside [ layout ] component is that we are going to use this component through the page ( i.e, every pages ).
 import Nav from '@components/Nav'
 import Provider from '@components/Provider'


 //-----------------------------------
    


 


 // here let us change the Metadata for our application 

  export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
  }



  // here let us change the function name that is [ RootLayout ].
const RootLayout = (   { children }   ) => {

    


 /*

   Error :-

   Unhandled Runtime Error

Error: children is not defined
Source

app\layout.jsx (34:17) @ children

  32 |
33 |     {/ * Here below we can see that we are rendering all the children components, here children means sub-components which will be wrapped here. * /}
> 34 |     {children}
|     ^
35 | </main>
36 |
37 |





   -----------

    The below error occurs if we fail to specify where [ children ] variable comes, please do specify it in the function parameter by destructuring it.


 */



  return (
    
    // Here let us have the [ html ] wrapper tag inside which we will wrap the layout content

    <html lang='en' >

        <body> 


            {/* Here we are wrapping the `Provider` component inside the body tag */}

            <Provider>   

            <div className='main' > 
                <div  className='gradient'/>
            </div>

            <main  className='app' >

                {/* step 10 */}
                <Nav />

                {/* Here below we can see that we are rendering all the children components, here children means sub-components which will be wrapped here. */}
                {children}
            </main>

            </Provider>


        </body>

    </html>

  )
}



// do not forget to export the [ RootLayout ] component

export default RootLayout





























