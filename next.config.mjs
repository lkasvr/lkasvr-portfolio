/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FROM_EMAIL: process.env.FROM_EMAIL,
    RESEND_API_KEY: process.env.RESEND_API_KEY
  }
};

export default nextConfig;
