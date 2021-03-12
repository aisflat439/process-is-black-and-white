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
            <h2 style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={episode.slug}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Chapter Two of the "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>Lots of reflection on the new book this week. Both of the guys reflect on how getting started, heat checks and Shakespeare apply in their daily lives. This week is all about the book club, and how it relates to every day life. If you haven't done so yet, join the book club now and come along. It's a really fun book!</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          <p>Eddie Murphy - <a href="https://en.wikipedia.org/wiki/Eddie_Murphy">Wikipedia</a></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
