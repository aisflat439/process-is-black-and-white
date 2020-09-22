import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Episodes from "../components/episodes"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <article>
        <h1 style={{ fontSize: `1rem`, marginBottom: `1.45rem` }}>A weekly show following the entrepreneurship journeys of two friends.</h1>
        <p>If you'd enjoy sharing the journey of two friends building businesses, this show is for you. Vernon and Devin found friendship through a shared love of Philadelphia sports. As their friendship evolved and grew over time they began to discuss life, family, food and business. They both began to look to start a side business in 2020 and realized they were at a similar stage. Over the course of a few text messages and conversations they decided to start a book club to learn along together. Each week, they discuss a few chapters from a book, give updates about steps they've taken in the journey from wantrepreneur to entrepreneur.</p>
        <h4>Show format</h4>
        <p>Generally speaking, each episode covers each of us giving updates about our week, some light sports chatter, and reflections about the book their reading together. <Link to="/books/">The books</Link> are suggested in turn and are most frequently business books. That said, both of us believe that books are a window into wisdom, so we read what we're curious about, and grow our knowledge base together. We both firmly believe that the path to success involves dealing directly with our cultural differences and similarities. We share the view that the path to freedom involves sharing and helping each other, no matter if we're black or white, in tech or brick and mortar, or any other differences. The lessons of being a good person and entrepreneur apply across cultural and socioeconomic divides, and when we apply those lessons together, we're all better off.</p>
      </article>
    </main>
    <Subscribe />
    <div style={{ maxWidth: `70vw`, marginBottom: `1.45rem` }}>
      <Episodes />
    </div>
  </Layout>
)

export default IndexPage
