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
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))
      }
    </div >
  )
};

export default Episodes

// // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml

{/* <div>
  <article>
    <p>The guys return to their usual format. Vernon is feeling good, laying the foundation for the growth of the business. Devin feels back on task and productive again after life got in the way. Discussing chapter three of Thomas Sowells book reminds the guys how complicated everything is. Another episode and another mention of Jerami Grant, he's got to be the most mentioned person on the show.</p>
    <h3>Links:</h3>
    <p>The Carters - <a href="https://www.youtube.com/watch?v=54DZGlJLAAc/">Boss</a></p>
    <p>TJ McConnell - <a href="https://en.wikipedia.org/wiki/T._J._McConnell/">Player wiki</a></p>
    <p>LeBron making the right decision - <a href="https://youtu.be/N7zipKFp3SA?t=130">YouTube link</a></p>
    <p>Optionality - <a href="https://www.startupsfortherestofus.com/episodes/episode-512-the-power-of-options">Startups for the rest of us</a></p>
  </article>
</div> */}