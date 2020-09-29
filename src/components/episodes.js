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
        <div style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
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

//   < div >
//   <article>
//     <p>The guys discuss an exciting new plan. Vernon has made tremendous progress on his spice rubs so he's beginning to look at eCommerce. Devin's background in eCommerce agency work sets up a nice opportunity for the two to work together, for the listeners. There's discussion on the when in doubt, blitz strategy as well as a confession about how they read different chapters last week. </p>
//     <h3>Links:</h3>
//     <p>Akimbo Podcast - <a href="https://www.akimbo.link/blog/s-3-e-2-you-re-it">Podcast episode</a></p>
//     <p>The Mom Test - <a href="http://momtestbook.com/">Book link</a></p>
//   </article>
// </div >