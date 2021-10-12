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
          <p>We begin This is Marketing, by Seth Godin</p>
          <p>Following up Building a Storybrand is Seth Godin's book, This is Marketing. The guys reflect on the opening 3 chapters. Is this the week we won't talk about Ben Simmons? Listen and find out!</p>
          <h3>Links:</h3>
          <p>Our current book  <a href="https://www.amazon.com/This-Marketing-Cant-Until-Learn/dp/0525540830">This is Marketing</a></p>
        </article>
      </div> */}
    </div>
  )
}

export default Episodes
