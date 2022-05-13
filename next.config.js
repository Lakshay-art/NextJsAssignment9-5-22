/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
     return[
       {
         source:'/',
         destination:'/card-checkout',
         permanent:true,
       },
     ]
  }
}

module.exports = nextConfig
