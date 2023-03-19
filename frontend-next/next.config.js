/** @type {import('next').NextConfig} */
require("dotenv").config({ path: `../.env.${process.env.ENVIRONMENT}`});

const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
    REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    REACT_APP_AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
  },
}

module.exports = nextConfig
