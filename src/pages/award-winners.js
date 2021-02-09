import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

export const AWARD_WINNERS = [
  {
    name: 'Rodney Burgess',
    company: 'Late Bloomer Cinema',
    website: 'https://www.instagram.com/latebloomercinema/',
    about: 'Rodney is a soft spoken but hard working video director based in Philadelphia. He has transitioned from chef to entrepenuer with his company Late Bloomer Cinema. We discuss what it takes to go from dreams to goals and how putting in the effort creates the right outcomes, no matter how old you are when you start.',
    episode: '31'
  },
  {
    name: 'Michael Cunningham',
    company: 'Kingdom Keepers',
    website: 'https://www.kingdomkeepersoutreach.org/',
    about: 'Michael is a husband, father, founder and entrepreneur making a difference in the lives of at risk folks in our community. He and his team have grown Kingdom Keepers, a non profit that gets shoes and food into the hands of folks facing housing insecurity. Join us this week as he reflects on his story and tells us about how his process of going from wantrepreneur to entrepreneur evolved.',
    episode: '25'
  }
]

const Process = () => (
  <>
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
  </>
)

export default Process
