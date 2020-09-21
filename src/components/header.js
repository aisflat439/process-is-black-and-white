import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      padding: `.5rem`,
    }}
  >
    <div
      style={{
        border: '2px solid white',
        padding: `.5rem`,
      }}
    >
      <div
        style={{
          border: '2px solid white',
        }}
      >

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <h3 style={{ margin: 0, display: `flex`, alignItems: `center` }}>
            <Link
              to="/books/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              the books
        </Link>
          </h3>
        </div>
      </div>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
