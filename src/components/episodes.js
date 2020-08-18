import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPodcastEpisode {
        edges {
          node {
            title
            summary
          }
        }
      }
    }
  `)

  console.log(data)

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
