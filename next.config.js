
/* /** @type {import('next').NextConfig} * /
const nextConfig = {}

module.exports = nextConfig

*/




// Make sure to use the below code all the time to overcome the below error 

/*
 

   Error :-

   1/ ./node_modules/bson/lib/bson.mjs Module parse failed: The top-level-await experiment is ot enabled (set experiments.toplevelAwait:true to enabled it)
      Error: The top-level-await experiment is not enabled ( set experiment-topLevelAwait: true to enabled it )


*/



// Solution :- Below code is the solution

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig
  




