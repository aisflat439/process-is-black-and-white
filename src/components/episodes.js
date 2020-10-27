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
    </div >
  )
};

export default Episodes

// // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml

{/* <div>
  <article>
    <p>Back to the check in format Vernon and Devin give updates about the work they've done. Vernon is feeling productive and is soaking up information. Devin is making some headway publishing a new blog post and updating his personal sites branding.</p>
    <h3>Links:</h3>
    <p>Akimbo podcast - <a href="https://www.akimbo.link/blog/s-4-e-12-fooled-by-spectrum">Podcase Episode</a></p>
    <p>Seth Godin - <a href="https://www.sethgodin.com/">Personal Site</a></p>
    <p>Discrimination and Disparities - <a href="https://www.amazon.com/Discrimination-Disparities-Thomas-Sowell/dp/154164560X">Book</a></p>
    <p>Devin's redesigned site - <a href="https://www.fitzsimons.dev/">Website</a></p>
    <p>Traction - <a href="https://www.amazon.com/Traction-Startup-Achieve-Explosive-Customer/dp/1591848369">New Book!</a></p>
  </article>
</div> */}