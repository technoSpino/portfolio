module.exports = {
  siteMetadata: {
    description: "Matthew Wojtowicz CV",
    locale: "en",
    title: "Wojtowicz CV",
    formspreeEndpoint: "https://formspree.io/f/xeqdvjog",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-blue",
      },
    },
  ],
}
