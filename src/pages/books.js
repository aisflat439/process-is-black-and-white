import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BOOKS = [
  {
    title: 'The Color of Money',
    author: 'Mehrsa Baradaran',
    link: 'https://www.amazon.com/gp/product/0674237471/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0674237471&linkCode=as2&tag=theprocessisb-20&linkId=318b9d1f2ff0de7a04c8eb2bb1ed96e6'
  },
  {
    title: 'Traction: How Any Startup Can Achieve Explosive Customer Growth',
    author: 'Gabriel Weinberg',
    link: 'https://www.amazon.com/gp/product/1591848369/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1591848369&linkCode=as2&tag=theprocessisb-20&linkId=0a661ea812806e8831120fc8d3f5927b'
  },
  {
    title: 'Discrimination and Disparities',
    author: 'Thomas Sowell',
    link: 'https://www.amazon.com/gp/product/B078N861YQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B078N861YQ&linkCode=as2&tag=theprocessisb-20&linkId=5bdc2c8e8867c1808fcea9cd19d84d9e'
  },
  {
    title: 'The Mom Test',
    author: 'Rob Fitzpatrick',
    link: 'https://www.amazon.com/gp/product/1492180742/ref=as_li_tl?ie=UTF8&tag=theprocessisb-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1492180742&linkId=89ba8d8927d6a550981c5aebd5d81ad6'
  },
  {
    title: 'Soar',
    author: 'T.D. Jakes',
    link: 'https://www.amazon.com/gp/product/1455553921/ref=as_li_tl?ie=UTF8&tag=theprocessisb-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1455553921&linkId=d5a4d332ea52db2e3ed556fdfc00edcb'
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
