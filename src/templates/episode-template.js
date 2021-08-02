import React from "react"
import AudioCard from "audiocard"
import styled from 'styled-components'

import Seo from "../components/seo"
import ShareButtons from "../components/share-buttons"
import FeatureBlock from "../components/feature-block"

const StyledInfoBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 900px) {
  flex-direction: column;
  align-items: flex-start;
}

> h3 {
  margin-bottom: 0;
}
`

function truncateString(str, num) {
  if (str?.length <= num) {
    return str
  }
  return str?.slice(0, num) + '...'
}

const Episodes = ({ pageContext }) => {
  const releaseDate = new Date(pageContext.date)
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const shareDescription = pageContext.subtitle.replace(/(<([^>]+)>)/gi, "").trim();

  return (
    <>
      <Seo 
        title={pageContext.title} 
        description={truncateString(pageContext.contentSnippet, 250)} 
        ogImageUrl={pageContext.id}
        />
      <div className="site-margin">
        <h1>{pageContext.title}</h1>
        <StyledInfoBlock>
          <h3>{new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(releaseDate)}</h3>
          <ShareButtons url={url} title={pageContext.title} description={shareDescription} />
        </StyledInfoBlock>
        <section style={{ marginBottom: '1rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <AudioCard
              title={pageContext.title}
              art="https://www.theprocessisblackandwhite.com/images/logo2.png"
              source={pageContext.url.replace('http', 'https')}
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
