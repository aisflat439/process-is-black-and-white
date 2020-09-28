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
  console.log('episodes', episodes)

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

  // <div><article> <p>Discussion of the new book begins. Vernon is excited that it's data and fact based, Devin is interested in the idea of prerequisites. The pair give updates as they move forward. Vernon is excited about what the future holds for getting underpriced assets. Devin finally got his computer back and is ready to get back to work.</p>
  // <h3>Links:</h3>
  //   <p>Shopify - <a href="https://www.shopify.com/">eCommerce SaaS</a></p>
  //   <p>Cottage Food Laws - <a href="https://www.pickyourown.org/CottageFoodLawsByState.htm">Explanation blog</a></p>
  //   <p>Chapter 1 - <a href="https://www.amazon.com/Discrimination-Disparities-Thomas-Sowell/dp/154164560X">Discrimination and Disparities</a></p>
  //   <p>Jerami Grant - <a href="https://en.wikipedia.org/wiki/Jerami_Grant">Wikipedia entry</a></p>
  // </article></div >