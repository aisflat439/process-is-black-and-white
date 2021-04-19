const path = require("path")

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
      enclosure
    } = episode
    const { url } = enclosure;
    const path = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, '-')
      .replace(/---/g, '-')
      .replace(/--/g, '-')
      .toLowerCase();

    createPage({
      path: `podcast/${path}`,
      component: episodeTemplate,
      context: {
        date: isoDate,
        id,
        contentSnippet,
        pagePath: path,
        subtitle: title,
        summary: content,
        title,
        url,
      },
    })
  })
}