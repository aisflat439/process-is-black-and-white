import React from "react"
import AudioCard from "audiocard"

import SEO from "../components/seo"
import FeatureBlock from "../components/feature-block"

const Episodes = ({ pageContext }) => {
  const releaseDate = new Date(pageContext.date)

  return (
    <>
      <SEO title={pageContext.title} />
      <div className="site-margin">
        <h1>{pageContext.title}</h1>
        <h3>{new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(releaseDate)}</h3>
        <section style={{ marginBottom: '1rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <AudioCard
              title={pageContext.title}
              art="https://www.theprocessisblackandwhite.com/images/logo2.png"
              source={pageContext.url}
              skipBackSeconds={10}
              skipForwardSeconds={30}
              background="black"
              color="white"
              progressBarBackground="white"
              progressBarCompleteBackground="darkGray"
            />
          </div>
        </section>
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: pageContext.summary }} />
        </article>
      </div >
      <FeatureBlock />
    </>
  )
}


export default Episodes

  // // http: //cast.rocks/hosting/26747/feeds/6EK9V.xml
