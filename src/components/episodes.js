import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const makePath = title =>
  title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "-")
    .replace(/---/g, "-")
    .replace(/--/g, "-")
    .toLowerCase()

const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFeedPodcastEpisode(sort: { order: DESC, fields: isoDate }, limit: 10) {
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

  const episodes = data.allFeedPodcastEpisode.edges

  return (
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div
          key={episode.title.replace(" ", "-")}
          data-testId={episode.title.replace(" ", "-")}
          style={{
            border: `2px solid black`,
            padding: `.5rem`,
            marginBottom: `1.45rem`,
          }}
        >
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 className="base-font" style={{ marginTop: `1rem` }}>
              <span style={{ color: `black`, textDecoration: `none` }}>
                {episode.title}
              </span>
            </h2>
            <div style={{ marginBottom: "10px" }}>
              <Link to={`podcast/${makePath(episode.title)}`}>Listen here</Link>{" "}
            </div>
            <div dangerouslySetInnerHTML={{ __html: episode.content }} />
          </div>
        </div>
      ))}
      {/* <div>
        <article>
          <p>Part three of The Vanishing Half</p>
          <p>The guys discuss how cool it is to watch someone elses process. They appreciate the changes of the podcasting platform they use, fusioncast. Then, they get into The Vanishing Half by Brit Bennett.</p>
          <h3>Links:</h3>
          <p>Our new book  <a href="https://www.amazon.com/Vanishing-Half-Novel-Brit-Bennett/dp/0525536299">The Vanishing Half</a></p>
        </article>
      </div> */}
    </div>
  )
}

export default Episodes
