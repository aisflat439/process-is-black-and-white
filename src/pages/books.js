import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { BOOKS } from '../assets/data'

const SecondPage = () => (
  <>
    <SEO title="The Books" />
    <div className="site-margin">
      <h2 className="base-font">Here's the books we read and links to get them</h2>
      {BOOKS.map(book => (
        <div key={book.title.replace(' ', '-')} style={{
          padding: '.5rem',
          margin: '1rem',
          border: '2px solid black'
        }}>
          <div style={{
            padding: '2rem',
            border: '2px solid black'
          }}>
            <h3>{book.title} &nbsp;&nbsp;&nbsp;<small>{book.author}</small></h3>
            <a href={book.link} target="_blank" rel="noreferrer">Buy it here</a>
          </div>
        </div>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </div>
  </>
)

export default SecondPage
