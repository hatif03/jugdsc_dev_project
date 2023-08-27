/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "icons-for-free.com",
                protocol: "https",
            },
            {
                hostname: "files.realpython.com",
                protocol: "https",
            },
            {
                hostname: "sloopstash.com",
                protocol: "https",
            },
            {
                hostname: "rubynator.com",
                protocol: "https",
            },
            {
                hostname: "substackcdn.com",
                protocol: "https",
            },
            {
                hostname: "freepngimg.com",
                protocol: "https",
            },
            {
                hostname: "i.pinimg.com",
                protocol: "https",
            },
            {
                hostname: "pbs.twimg.com",
                protocol: "https",
            },
            {
                hostname: "avatars.githubusercontent.com",
                protocol: "https",
            },
            {
                hostname: "www.shareicon.net",
                protocol: "https",
            },
            {
                hostname: "e0.pxfuel.com",
                protocol: "https",
            },
            {
                hostname: "e1.pxfuel.com",
                protocol: "https",
            },
        ],
    },
}

module.exports = nextConfig
