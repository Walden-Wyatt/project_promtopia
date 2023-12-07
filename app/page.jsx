


 import Feed from "@components/Feed"




const page = () => {
  return (

    // step 7
    // <div> Home </div>
    // The below code is from [ tailwind css ]
    <section className="w-full flex-center flex-col" >

      {/* 
       - whenever you see [ _ ] in the classname which means it is coming from our custom class file [ styles/globals.css ].
      */}
      <h1 className="head_text text-center" >
        Discover & Share

        <br className="max-md:hidden" />
        <span className="orange_gradient text-center" >
          AI-Powered Prompts 
        </span>

      </h1>

      <p>
        Promptopia is an Open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>


      {/* step 9 */}

       <Feed />


    </section>
  )
}

export default page