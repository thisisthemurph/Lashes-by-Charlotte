module.exports = {
  siteMetadata: {
    title: `Lashes by Charlotte`,
    description: `Part time beauty and lash technician based in the Warwickshite / Stratford-upon-Avon area.`,
    author: `Michael Murphy`,
    contact_info: {
      telephone_number: `+447902384476`,
      telephone_number_fmt: `07902 384 476`,
      email: `chatrlotte@lashesbycharlotte.com`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        icon: `src/images/icon-48x48.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
