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
        <div key={episode.title.replace(' ', '-')} style={{ border: `2px solid black`, padding: `.5rem`, marginBottom: `1.45rem` }}>
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
          <p>Chapter three of the "The Power of Vulnerablility".</p>
          <p>The guys have a wide ranging, longer than usual conversation about everything from Basketball to how empathy impacts creativity. Should LeBron encourage people to be fired? Will his occasional moments where he lacks empathy impact his ability to have impact after basketball?</p>
          <p>The conversation around We've Got Answers relates more to life than business or basketball but Devin and Vernon are both better people for having it. Join us this week and be sure to message us about your own reflections.</p>
          <p>Devin, in turn, suggests a new podcast episode to listen to this week as well</p>
          <h3>Links:</h3>
          <p>Our new book <a href="https://amzn.to/3g0CDoN">The Power of Vulnerablility<a/></p>
          <p>This weeks podcast to listen to: <a href="https://www.econtalk.org/lisa-cook-on-racism-patents-and-black-entrepreneurship/">EconTalk<a/></p>
          <p>Last weeks podcast to listen to: <a href="https://www.audible.com/pd/Weve-Got-Answers-Audiobook/B08WF112B9">We've Got Answers<a/></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
