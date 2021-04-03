import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFeedPodcastEpisode(limit: 10) {
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
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 className="base-font" style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={episode.title.replaceAll(' ', '-').replaceAll('---', '-').toLowerCase()}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.content }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Is this the last episode? Is the show over? Nah.... We're gonna keep</p>
          <p>Chapter Five of the "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>In an exciting (and slightly overdue) surpise Vernon get's a promotion at work. How will the show continue? What about 2400themovement? Is Vernon's hot hand streak over or just getting started. Join us this week and tell a friend.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
