/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'sopurabiz.com.ng' }],
        destination: 'https://www.sopurabiz.com.ng',
        permanent: true,
      },
    ]
  },
}



export default nextConfig;


