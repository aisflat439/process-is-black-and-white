const DESCRIPTION = `Two friends discuss starting a their respective businesses, and whatever that journey entails. Each week, they read a few chapters from a book, discuss what they read and how that relates to their businesses. New episodes every Tuesday.`

module.exports = {
  siteMetadata: {
    title: `The Process is Black and White`,
    description: DESCRIPTION,
    author: `@process_is`,
    image: '/images/logo2.png',
    siteUrl: 'https://www.theprocessisblackandwhite.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `http://cast.rocks/hosting/26747/feeds/6EK9V.xml`,
        name: `PodcastEpisode`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration']
          }
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-open-graph-images`,
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
  ],
}
