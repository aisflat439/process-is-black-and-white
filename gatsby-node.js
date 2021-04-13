const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allFeedPodcastEpisode {
          nodes {
            isoDate
            id
            title
            content
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
      enclosure
    } = episode
    const { url } = enclosure;
    const path = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replaceAll(' ', '-')
      .replaceAll('---', '-')
      .replaceAll('--', '-')
      .toLowerCase();
    console.log(path)

    createPage({
      path: `podcast/${path}`,
      component: episodeTemplate,
      context: {
        date: isoDate,
        id,
        pagePath: path,
        subtitle: title,
        summary: content,
        title,
        url,
      },
    })
  })
}