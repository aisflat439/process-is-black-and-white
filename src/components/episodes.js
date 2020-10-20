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
    <p>In the second eCommerce episode the guys talk discuss fundamentals. The discussion centers around how different pages of a website relate to merchandising a brick and mortar store. Vernon has a name for his business a URL and some new goals for two weeks from now. Devin begins to discuss SEO and how to get traffic to your site.</p>
    <h3>Links:</h3>
    <p>Learning SEO - <a href="https://ahrefs.com/academy/">Hrefs</a></p>
    <p>Start your store - <a href="https://www.shopify.com/start/">Shopify</a></p>
    <p>Contact us - <a href="https://www.theprocessisblackandwhite.com/">Our site</a></p>
  </article>
</div> */}