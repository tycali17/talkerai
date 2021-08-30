module.exports = {
  reactStrictMode: true,
  env: {
    SPA: process.env.NEXT_PUBLIC_SPACE,
    ACC: process.env.NEXT_PUBLIC_ACCESS_TK,
    PRO: process.env.NEXT_PUBLIC_PRODUCT,
  },
  // NEXT requires linking image hub url (bases) in this config file
  images: {
    domains: ['images.ctfassets.net'],
  },
}
