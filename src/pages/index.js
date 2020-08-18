import React from "react"

import Layout from "../components/layout"
import Episodes from "../components/episodes"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Harras Devin to build something decent for this website instead of this by messaging @process_is on twitter..</p>
    <br />
    <div style={{ maxWidth: `70vw`, marginBottom: `1.45rem` }}>
      <Episodes />
    </div>
  </Layout>
)

export default IndexPage
