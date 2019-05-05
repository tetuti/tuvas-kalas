module.exports = {
  siteMetadata: {
    title: `Tuvas kalas!`,
    description: `Tuvas having a party and you're invited`,
    author: `Lars-Arle Wallin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tuvas Kalas`,
        short_name: `Tuvas Kalas`,
        start_url: `/`,
        background_color: `#f4d7e3`,
        theme_color: `#f4d7e3`,
        display: `minimal-ui`,
        icon: `src/images/cake.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
