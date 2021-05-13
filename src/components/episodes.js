import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const makePath = (title) => title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, '-')
      .replace(/---/g, '-')
      .replace(/--/g, '-')
      .toLowerCase();


const Episodes = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFeedPodcastEpisode(sort: {order: DESC, fields: isoDate}, limit: 10) {
        edges {
          node {
            id
            isoDate
            title
            content
            enclosure {
              url
            }
          }
        }
      }
    }
  `)

  const episodes = data.allFeedPodcastEpisode.edges; 

  return (
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div 
          key={episode.title.replace(' ', '-')} 
          data-testId={episode.title.replace(' ', '-')} 
          style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}
        >
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 className="base-font" style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={`podcast/${makePath(episode.title)}`}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.content }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Chapter four of the "The Power of Vulnerablility".</p>
          <p>Another wide ranging conversation. We discuss EconTalk, podcasts, and the 1619 project. Along with reflecting on what kind of vulnerability we each have. We reflect a little on business, but more on life and living well.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/3g0CDoN">The Power of Vulnerablility</a></p>
          <p>This weeks podcast to listen to: <a href="https://www.nytimes.com/2020/01/23/podcasts/1619-podcast.html">1619 Project</a></p>
          <p>Last weeks podcast to listen to: <a href="https://www.econtalk.org/lisa-cook-on-racism-patents-and-black-entrepreneurship/">EconTalk</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
