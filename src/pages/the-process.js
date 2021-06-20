import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"

import Seo from "../components/seo"

const makePath = (title) => title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, '-')
      .replace(/---/g, '-')
      .replace(/--/g, '-')
      .toLowerCase();

const StyledArticle = styled.article`
  a { 
    text-decoration: none;
  }

  > div {
    border: 2px solid black;
    padding: .5rem;
  }

  padding: .5rem;
  margin: 3rem;
  border: 2px solid black;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
`

const Process = () => {
  const data = useStaticQuery(graphql`
      query ProcessQuery {
        allFeedPodcastEpisode(sort: {order: DESC, fields: isoDate}) {
          edges {
            node {
              id
              isoDate
              title
              content
              enclosure {
                url
              }
            }
          }
        }
      }
    `)

  const episodes = data.allFeedPodcastEpisode.edges; 

  return (
  <>
    <Seo title="The Process" description="Every episode we've ever done." />
    <div className="site-margin">
      <h2 className="base-font">A link to every episode ever</h2>
      {episodes.map(({node: episode}) => (
        <StyledArticle key={episode.id}>
          <div>
            <Link to={`/podcast/${makePath(episode.title)}`}>
              <h3>{episode.title}</h3>
              <p>Published on {new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(episode.isoDate))}</p>
            </Link>
          </div>
        </StyledArticle>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </div>
  </>
)}

export default Process
