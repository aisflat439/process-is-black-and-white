import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPodcastEpisode {
        edges {
          node {
            id
            date
            title
            summary
          }
        }
      }
    }
  `)

  const episodes = data.allPodcastEpisode.edges.sort((a, b) => new Date(b.node.date) - new Date(a.node.date));
  console.log('episodes', episodes)

  return (
    <div>
      {data.allPodcastEpisode.edges.map(({ node }) => (
        <div>
          <h2 style={{ marginTop: `1rem` }}>{node.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: node.summary }} />
        </div>
      ))}
    </div>
  )
}

export default Episodes
