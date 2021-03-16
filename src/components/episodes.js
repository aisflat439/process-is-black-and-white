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

  return (
    <div style={{ padding: `.5rem`, marginTop: `1.45rem` }}>
      {episodes.map(({ node: episode }) => (
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
          <div style={{ border: `2px solid black`, padding: `1.5rem` }}>
            <h2 class="base-font" style={{ marginTop: `1rem` }}><span style={{ color: `black`, textDecoration: `none` }}>{episode.title}</span></h2>
            <div style={{ marginBottom: '10px' }}><Link to={episode.slug}>Listen here</Link> </div>
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))
      }
      {/* <div>
        <article>
          <p>Chapter Three of the "The Hot Hand: The Mystery and Science of Streaks".</p>
          <p>The guys discuss how frequently they are fooled by randomness. Do hot streaks exist? How should they best react to knowing that the data doesn't back the feeling of being hot. Can either of them shoot the rock effectively? We also get updates about the work both Vernon and Devin are putting in, and this week, the lack of results they are getting.</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/37GgUxe">The Hot Hand<a/></p>
          <p>Wilt - <a href="https://en.wikipedia.org/wiki/Wilt_Chamberlain">Wikipedia</a></p>
          <p>MVP Candidate- <a href="https://twitter.com/sixers/status/1371783553084751873?s=20">Twitter</a></p>
          <p>Harvey Pollack - <a href="https://en.wikipedia.org/wiki/Harvey_Pollack">Wikipedia</a></p>
          </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
