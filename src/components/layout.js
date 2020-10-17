/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'typeface-abril-fatface';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer style={{
        backgroundColor: `black`, color: `white`, margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}>
        <div style={{
          maxWidth: 1140,
          margin: `0 auto`
        }}>
          Vernon Lee - <a style={{ color: `white` }} href="https://www.fitzsimons.dev">Personal Site</a>
          <br />
          and
          <br />
          Devin Fitzsimons - <a style={{ color: `white` }} href="https://www.fitzsimons.dev">Personal Site</a>
          <br />
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={{ color: `white` }}>Gatsby</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
