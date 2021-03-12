import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { AWARD_WINNERS } from '../assets/data'

const SEO_TEXT = 'Each month we invite on a guest who is creating their own opportunity for themselves themselves in their chosen field. Our selections range from artists to entrepreneurs, with non profits and everything in between.'

const Process = () => (
  <>
    <SEO title="Jerami Grant Award Winners" description={SEO_TEXT} />
    <div className="site-margin">
      <h2>Jerami Grant award winners.</h2>
      <p>{SEO_TEXT}</p>
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
