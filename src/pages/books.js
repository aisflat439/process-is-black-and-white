import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Here's the books we read and links to get them</h2>
    <div style={{
      margin: '1rem',
      padding: '2rem',
      border: '1px solid black'
    }}>
      <h3>The Mom Test &nbsp;&nbsp;&nbsp;<small>by rob fitzpatrick</small></h3>
      <a href="http://momtestbook.com/" target="_blank">Buy it here</a>
    </div>
    <div style={{
      margin: '1rem',
      padding: '2rem',
      border: '1px solid black'
    }}>
      <h3>Soar &nbsp;&nbsp;&nbsp;<small>by t d jakes</small></h3>
      <a href="https://store.tdjakes.org/p-3669-soar-build-your-vision-from-the-ground-up-by-t-d-jakes.aspx" target="_blank">Buy it here</a>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
