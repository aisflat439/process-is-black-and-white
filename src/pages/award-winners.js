import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AWARD_WINNERS = [
  {
    name: 'Michael Cunningham',
    company: 'Kingdom Keepers',
    website: 'https://www.kingdomkeepersoutreach.org/',
    about: 'Michael is a husband, father, founder and entrepreneur making a difference in the lives of at risk folks in our community. He and his team have grown Kingdom Keepers, a non profit that gets shoes and food into the hands of folks facing housing insecurity. Join us this week as he reflects on his story and tells us about how his process of going from wantrepreneur to entrepreneur evolved.',
    episode: '25'
  }
]

const Process = () => (
  <Layout>
    <SEO title="The Services" />
    <div className="site-margin">
      <h2>Where should you buy what and why?</h2>
      {AWARD_WINNERS.map(winner => (
        <div key={winner.name.replace(' ', '-')} style={{
          padding: '.5rem',
          margin: '1rem',
          border: '2px solid black'
        }}>
          <div style={{
            padding: '2rem',
            border: '2px solid black'
          }}>
            <h3>{winner.name}</h3>
            <a href={winner.website} target="_blank" rel="noreferrer">{winner.company}</a>
            <p>{winner.about}</p>
          </div>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Process
