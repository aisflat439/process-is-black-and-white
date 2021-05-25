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
          <p>Chapter Six of the "The Power of Vulnerability".</p>
          <p>We discuss if instant replay should exist, hot takes abound. In the final chapter of The Power of Vulnerability we reflect on Brene Browns 10 guideposts. We also reflect on Tobias Harris and the importance of having roles that make sense. Finally, we discuss our newest book, The Four Hour Workweek. Join us this week, and tell a friend</p>
          <h3>Links:</h3>
          <p>Our newest book <a href="https://amzn.to/34jgYRI">The Four Hour Work Week</a></p>
          <p>Our last book <a href="https://amzn.to/3g0CDoN">The Power of Vulnerability</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
