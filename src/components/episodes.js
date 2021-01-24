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
      {/* <div>
        <article>
          <h3>Chapters 4-6 of "The Color of Money"</h3>
          <p>We continue with The Color of Money and are reminded of the importance of this shows core goal. The history of banking is rife with conflict in the black community. As we support each other we have to be aware of history, and prepared for the future.</p>
          <p>The guys also discuss at length learning about and strategy around YouTube. It's not a platform they know a lot about, but they're both excited to meet their customers where they're at. </p>
          <h3>Links:</h3>
          <p>Our new book - <a href="https://www.amazon.com/gp/product/0674237471/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0674237471&linkCode=as2&tag=theprocessisb-20&linkId=318b9d1f2ff0de7a04c8eb2bb1ed96e6">The Color Of Money</a></p>
          <p>BD the Chef - <a href="https://www.instagram.com/bdthechef/">Instagram</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
