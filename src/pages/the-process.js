import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Seo from "../components/seo"

const Process = () => {
  const data = useStaticQuery(graphql`
      query ProcessQuery {
        allFeedPodcastEpisode {
          edges {
            node {
              id
              isoDate
              title
              content
              enclosure {
                url
              }
            }
          }
        }
      }
    `)

  const episodes = data.allFeedPodcastEpisode.edges; 

  return (
  <>
    <Seo title="The Process" description="Every episode we've ever done." />
    <div className="site-margin">
      <h2 className="base-font">A link to every episode ever</h2>
      {episodes.map(({node: episode}) => (
        <h3>{episode.title}</h3>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </div>
  </>
)}

export default Process
