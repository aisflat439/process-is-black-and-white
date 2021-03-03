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
  console.log('data', data)

  return (
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={episode.slug}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>We begin the new book, "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>The guys discuss the new book. They both fondly recall NBA Jam, talk about how hot streaks and how evolution happens when rules change. Vernon drops the amazing line, "the internet is the 3pt line of society". We then get to hear about how 24hundredthemovement is doing by the numbers. They're shooting their shot, and it's exciting to grow, but the reality is that business takes time and the numbers, for now, are small.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          <p>NBA Jam - <a href="https://en.wikipedia.org/wiki/NBA_Jam">Wikipedia</a></p>
          <p>24hundredthemovement - <a href="https://24hundredthemovement.com/">Website</a></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
