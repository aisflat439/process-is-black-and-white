import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
            url
            slug
          }
        }
      }
    }
  `)

  const episodes = data.allPodcastEpisode.edges.sort((a, b) => new Date(b.node.date) - new Date(a.node.date));

  return (
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 className="base-font" style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={episode.slug}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Chapter Four of the "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>In this episode we reflect on James Naismith and Paul Reed. The importance of diversification and the role that it plays in our lives. We consider how thinking about ownership of assets impacts our own lives as creators and entrepreneurs.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          <p>Paul Reed - <a href="https://en.wikipedia.org/wiki/Paul_Reed_(basketball)">Wikipedia</a></p>
          <p>Get help if you need it- <a href="https://www.mentalhealth.gov/get-help/immediate-help">Mental Health Resource</a></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
