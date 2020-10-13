module.exports = {
  siteMetadata: {
    title: `The Process is Black and White`,
    description: `Two friends discuss starting a their respective businesses along with whatever their journey entails.`,
    author: `@fitzsimonsdev`,
  },
  plugins: [
    {
      resolve: `@arshad/gatsby-theme-podcast-core`,
      options: {
        feedUrl: `http://cast.rocks/hosting/26747/feeds/6EK9V.xml`,
        podcast: {
          name: `The Process is Black and White`,
          description: `Two friends who are starting businesses have a weekly chat. They review a book they're reading, and schedule their weeks`,
          image: `assets/images/podcast.jpg`,
          social: [
            {
              name: `Apple Podcast`,
              url: `https://itunes.apple.com`,
            },
            {
              name: `Google Podcast`,
              url: `https://podcasts.google.com`,
            },
          ],
        },
      },
    },
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
        icon: `src/images/bw-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
