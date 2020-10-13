import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SERVICES_WE_RECOMMEND = [
  {
    title: 'Where should I buy a domain?',
    clarification: 'There are a lot of providers, we recommend Google Domains, because it\'s easy, it\'s not going anywhere and it is roughly the same cost.',
    name: 'Google Domains',
    link: 'https://domains.google/'
  },
]

const Process = () => (
  <Layout>
    <SEO title="The Services" />
    <h2>Where should you buy what and why?</h2>
    {SERVICES_WE_RECOMMEND.map(service => (
      <div key={service.name.replace(' ', '-')} style={{
        padding: '.5rem',
        margin: '1rem',
        border: '2px solid black'
      }}>
        <div style={{
          padding: '2rem',
          border: '2px solid black'
        }}>
          <h3>{service.title} &nbsp;&nbsp;&nbsp;<small>{service.clarification}</small></h3>
          <a href={service.link} target="_blank" rel="noreferrer">{service.name}</a>
        </div>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Process
