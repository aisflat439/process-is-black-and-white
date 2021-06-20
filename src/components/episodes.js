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
          <h4>A special episode.</h4>
          <p>It's the first Juneteenth, so we talk about it.</p>
          <p>Vernon and Devin discuss Juneteenth. How does it feel as a black man, a white man, and an American man. How should we celebrate, is this a solemn day of reflection, or should a joyous day. We're happy to have this discussion and learn from one another. That's the process on our show. Special shout out to the 1619 project, which provides wonderful storytelling and education about difficult and complicated subject.</p>
          <p>Happy birthday to Vernons little man too</p>
          <h3>Links:</h3>
          <p>Our current book <a href="https://amzn.to/34jgYRI">The Four Hour Work Week</a></p>
          <p>Podcast: <a href="https://open.spotify.com/show/7j5MhJCMBvOjF1Asi9LPLX">1619 Project</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes
