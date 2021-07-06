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
          <p>The final chapter of The Four Hour Work Week</p>
          <p>Devin is going to pivot, Vernon and the guys at 2400 are trying to figure out the path they want to take. Not only that, but we pick a new book, and finish off this book. All this and some reflection on what the July 4th holiday means to each of them. We're glad to be in your ears this week.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/3hhs80s">The Lean Startup</a></p>
          <p>Our current book <a href="https://amzn.to/34jgYRI">The Four Hour Work Week</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes
