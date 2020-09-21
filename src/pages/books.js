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
    <h2>Here's the books we read and links to get them</h2>
    {BOOKS.map(book => (
      <div style={{
        margin: '1rem',
        padding: '2rem',
        border: '1px solid black'
      }}>
        <h3>{book.title} &nbsp;&nbsp;&nbsp;<small>{book.author}</small></h3>
        <a href={book.link} target="_blank" rel="noreferrer">Buy it here</a>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
