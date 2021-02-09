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
          <h3>Jerami Grant Award Winner Rodney </h3>
          <p>We're excited to have Rodney from Late Bloomer Cinema with us. Join us as we learn about his story and the transition from Chef to Videographer. He walks us through how even though he was a success in the restaurant industry, his hopes and goals sent him in another direction.</p>
          <br />
          <p>"You gotta make your own way. You gotta find a way. You gotta get it done. It's hard. It's tough. That's what I tell my students every day in class. I've been very fortunate. Some people might call me a hardhead, but I'm not going to let other people dictate to me who I should be or the stories I should tell. That doesn't register with me." -- Spike Lee</p>
          <p>The chapters for "The Color of Money" this week were 10-12.</p>
          <h3>Links:</h3>
          <p>24hundredthemovement - <a href="https://24hundredthemovement.com/">Website</a></p>
          <p>Hank Aaron - <a href="https://en.wikipedia.org/wiki/Hank_Aaron">Wikipedia</a></p>
          <p>This months book - <a href="https://www.amazon.com/gp/product/0674237471/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0674237471&linkCode=as2&tag=theprocessisb-20&linkId=318b9d1f2ff0de7a04c8eb2bb1ed96e6">The Color Of Money</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
