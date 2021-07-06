const path = require("path")
const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allFeedPodcastEpisode(sort: {order: DESC, fields: isoDate}) {
          nodes {
            isoDate
            id
            title
            content
            contentSnippet
            enclosure {
              url
            }
            itunes {
              duration
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each podcast episode.
  const episodeTemplate = path.resolve(`src/templates/episode-template.js`)

  result.data.allFeedPodcastEpisode.nodes.forEach((episode) => {
    const {
      isoDate,
      id,
      title,
      content,
      contentSnippet,
      enclosure,
      itunes
    } = episode
    const { url } = enclosure;
    const { duration } = itunes;
    const pagePath = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, '-')
      .replace(/---/g, '-')
      .replace(/--/g, '-')
      .toLowerCase();

    const openGraphImage = createOpenGraphImage(createPage, {
      path: `/og-image/${id}.png`,
      component: path.resolve(`src/templates/og-image.js`),
      size: {
        width: 500,
        height: 500,
      },
      context: {
        id,
        title,
        duration,
        date: isoDate,
      },
    });

    createPage({
      path: `podcast/${pagePath}`,
      component: episodeTemplate,
      context: {
        date: isoDate,
        duration,
        id,
        contentSnippet,
        pagePath: pagePath,
        subtitle: title,
        summary: content,
        title,
        url,
        ogImage: openGraphImage,
      },
    })
  })
}