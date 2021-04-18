import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 className="base-font" style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={`podcast/${episode.title.replaceAll(' ', '-').replaceAll('---', '-').toLowerCase()}`}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.content }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Chapter Seven of the "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>Alec Bohm sneaks in safely when he should have been out, will the gang at 2400 also get to home plate safe? Find out in this episode of the show. We finish off our book and it's Vernon's chance pick. Will his streak of more data focused books continue? </p>
          <p>Join us this week and tell a friend.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/3g0CDoN">The Power of Vulnerablility<a/></p>
          <p>Our last book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
