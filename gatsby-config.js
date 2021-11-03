module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Max's Space`,
    author: `Max Anselmo`,
    description: `A place where one devoted developer describes developing developments.`,
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/maxanselmo/`,
      },
      {
        name: `github`,
        url: `https://github.com/themanselmo`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
