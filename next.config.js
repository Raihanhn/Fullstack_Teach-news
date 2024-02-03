/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      "miro.medium.com",
      "media.licdn.com",
      "www.fujitsu.com",
      "co02201641.schoolwires.net",
      "www.simplilearn.com",
      "omdia.tech.informa.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
