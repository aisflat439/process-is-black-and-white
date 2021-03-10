const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allPodcastEpisode {
          nodes {
            date(locale: "us")
            id
            slug
            subtitle
            summary
            title
            url
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

  result.data.allPodcastEpisode.nodes.forEach((episode) => {
    const {
      date,
      id,
      slug,
      subtitle,
      summary,
      title,
      url,
    } = episode

    createPage({
      path: slug,
      component: episodeTemplate,
      context: {
        date,
        id,
        pagePath: slug,
        subtitle,
        summary,
        title,
        url,
      },
    })
  })
}