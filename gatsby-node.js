const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allPodcastEpisode {
      nodes {
        slug
        title
        summary
        date(locale: "us")
        id
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

  result.data.allPodcastEpisode.nodes.forEach((episode, index) => {
    const { slug, id, title, summary, date, url } = episode

    createPage({
      path: slug,
      component: episodeTemplate,
      context: {
        pagePath: slug,
        id,
        title,
        summary,
        date,
        url,
      },
    })
  })
}