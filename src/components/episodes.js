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
          }
        }
      }
    }
  `)

  const episodes = data.allPodcastEpisode.edges.sort((a, b) => new Date(b.node.date) - new Date(a.node.date));

  return (
    <div>
      {data.allPodcastEpisode.edges.map(({ node }) => (
        <div>
          <h2 style={{ marginTop: `1rem` }}><a style={{ color: 'black' }} href={node.url}>{node.title}</a></h2>
          <div dangerouslySetInnerHTML={{ __html: node.summary }} />
          {/* <p>Now 10 episodes in, the guys finish their second book. While recapping The Mom Test is one part of the excitement, Vernon is extra excited about a relatively recent episode of the IndieHackers podcast that came out (see links below). Devin's computer continues to be in the shop but working through this book may have created an opportunity for him.</p>
          <article><h3>Links:</h3>
            <p>The Cookie Episode - <a href="https://www.indiehackers.com/podcast/166-sam-eaton-of-crave-cookie">IndieHackers</a></p>
            <p>The info product talk - <a href="https://www.youtube.com/watch?v=GNROvmAu050">YouTube</a></p>
            <p>The dream shake - <a href="https://en.wikipedia.org/wiki/Hakeem_Olajuwon">Wikipedia</a></p> */}
          {/* </article> */}
        </div>
      ))
      }
    </div >
  )
};

export default Episodes

// http: //cast.rocks/hosting/26747/feeds/6EK9V.xml