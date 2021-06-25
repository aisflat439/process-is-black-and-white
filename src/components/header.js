import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, isHidden }) => {
  if (isHidden) return <></>
  return (
   <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
      padding: `.5rem`,
    }}
  >
    <div
      style={{
        border: `.334rem solid white`,
        padding: `.5rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `70vw`,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          justifyContent: `space-between`
        }}
      >
        <h2 style={{
          fontSize: `3rem`,
          fontWeight: 400,
          margin: 0,
        }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
      </div>
      <div style={{ display: `flex`, justifyContent: `space-evenly` }}>
        <h3 style={{ margin: `.5rem` }}>
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
        <h3 style={{ margin: `.5rem` }}>
          <Link
            to="/the-process/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
              the process
          </Link>
        </h3>
        <h3 style={{ margin: `.5rem` }}>
          <Link
            to="/award-winners/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            award winners
        </Link>
        </h3>
      </div>
    </div>
  </header >
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
