import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QUESTIONS = [
  {
    title: 'What is eCommerce?',
    clarification: '',
    answer: 'Literally anything you buy online would be classified as eCommerce. So if you buy something online from Kohls or you do pickup for groceries, that\'s all considered eCommerce. Amazon too. But for our purposes we\'re talking more about SaaS apps, that let you have a retail or wholesale business selling things online. There are a lot of ways you can do this, you can have a service like Shopify or BigCommerce, or you can have a tool that you use as your own, like Magento. Or you can build your own. So think of eCommerce, for our purposes, as an online retail store.'
  },
  {
    title: 'What are the minimum requirements to start an eCommerce business?',
    clarification: '',
    answer: ''
  },
  {
    title: 'Do I need an LLC?',
    clarification: '',
    answer: ''
  },
  {
    title: 'How do I get paid?',
    clarification: '',
    answer: ''
  },
  {
    title: 'How does shipping work?',
    clarification: '',
    answer: ''
  },
  {
    title: 'What can I seel through eCommerce?',
    clarification: '',
    answer: ''
  },
  {
    title: 'How are my taxes effected?',
    clarification: '',
    answer: ''
  },
  {
    title: 'How do you purchase an item from eCommerce',
    clarification: '',
    answer: ''
  },
]

const Process = () => (
  <Layout>
    <SEO title="The Process" />
    <h2>Vernon has questions... we have the answers</h2>
    {QUESTIONS.map(question => (
      <div style={{
        padding: '.5rem',
        margin: '1rem',
        border: '2px solid black'
      }}>
        <div style={{
          padding: '2rem',
          border: '2px solid black'
        }}>
          <h3>{question.title} &nbsp;&nbsp;&nbsp;<small>{question.clarification}</small></h3>
          <p>{question.answer}</p>
        </div>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Process
