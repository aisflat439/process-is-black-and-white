import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BOOKS = [
  {
    title: 'Discrimination and Disparities',
    author: 'Thomas Sowell',
    link: 'https://www.amazon.com/Discrimination-Disparities-Thomas-Sowell/dp/154164560X'
  },
  {
    title: 'The Mom Test',
    author: 'Rob Fitzpatrick',
    link: 'http://momtestbook.com/'
  },
  {
    title: 'Soar',
    author: 'T.D. Jakes',
    link: 'https://store.tdjakes.org/p-3669-soar-build-your-vision-from-the-ground-up-by-t-d-jakes.aspx'
  },
]

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="site-margin">
      <h2>Here's the books we read and links to get them</h2>
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
  </Layout>
)

export default SecondPage
