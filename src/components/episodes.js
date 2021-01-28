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
          <h3>“I’m not trying to make anyone forget the Babe; but only to remember Hank Aaron.”</h3>
          <p>This week, a major win for Vernon (and everyone at 24hundredthemovement) as they make the website live. This represents the beginning of Vernon's first venture into the business world. Devin asks him how it feels to have built his first site and what he learned along the way.</p>
          <p>“In playing ball, and in life, a person occasionally gets the opportunity to do something great. When that time comes, only two things matter: being prepared to seize the moment and having the courage to take your best swing.” - Hank Aaron</p>
          <p>Join us this week as we celebrate Vernon taking a swing and seizing the moment.</p>
          <p>The chapters for "The Color of Money" this week were 7-9.</p>
          <h3>Links:</h3>
          <p>24hundredthemovement - <a href="https://24hundredthemovement.com/">Website</a></p>
          <p>Hank Aaron - <a href="https://en.wikipedia.org/wiki/Hank_Aaron">Wikipedia</a></p>
          <p>Scouting Report - <a href="https://preview.redd.it/52okvquot9d61.jpg?width=640&crop=smart&auto=webp&s=e0139571109d87c4ba63cda7a5acfc5f30f01823">Image</a></p>
          <p>Our new book - <a href="https://www.amazon.com/gp/product/0674237471/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0674237471&linkCode=as2&tag=theprocessisb-20&linkId=318b9d1f2ff0de7a04c8eb2bb1ed96e6">The Color Of Money</a></p>
        </article>
      </div> */}
    </div >
  )
};

export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
