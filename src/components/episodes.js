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

{/* <div>
  <article>
    <p>The first of our what is eCommerce and how do I get started episodes. Vernon asks some high level questions about what eCommerce is and how it works. Devin does his best to make the answers relatable to regular retail.</p>
    <h3>Links:</h3>
    <p>Sole Proprietorship in PA - <a href="https://lmgtfy.app/?q=sole+proprietor+in+pennsylvania/">Pennsylvania Sole Proprietorship</a></p>
    <p>LLC in PA - <a href="https://lmgtfy.app/?q=how+do+i+start+an+llc+in+pennsylvania/">Pennsylvania LLC</a></p>
    <p>Getting domains and other recommendations - <a href="https://www.theprocessisblackandwhite.com/services/">Services</a></p>
  </article>
</div> */}