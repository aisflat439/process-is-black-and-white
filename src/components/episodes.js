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
          <h3>Chapters 1-3 of "The Color of Money"</h3>
          <p>Join us as we begin to The Color of Money. The history that this book sheds light on is important and untold. We learn about the tricks and scams that have plagued black banking and consider what that means for the shows goals. So far, this is story provides vital context for us as people, and entrepreneurs.</p>
          <p>Vernon has had a successful week with social media, starting the conversation and the show is interacting with lots of businesses working the process. Check them out on links below. Vernon is making a special effort to join <a href="https://www.instagram.com/mad_lashed_/">Mad Lashed's</a> raffle and we hope you do too!</p>
          <h3>Links:</h3>
          <p>Our new book - <a href="https://www.amazon.com/Color-Money-Black-Racial-Wealth/dp/0674970950">The Color Of Money</a></p>
          <p>BD the Chef - <a href="https://www.instagram.com/bdthechef/">Instagram</a></p>
          <p>J~Velor - <a href="https://www.instagram.com/jvel.our/">Instagram</a></p>
          <p>Mad Lashed - <a href="https://www.instagram.com/mad_lashed_/">Instagram</a></p>
          <p>The Missing Plug - <a href="https://www.facebook.com/The-Missing-Plug-310095162476018/">Facebook</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
