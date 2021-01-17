import React from "react"
import styled from "styled-components"

import AudioCard from "audiocard"
import { BOOKS } from '../pages/books'

const StyledSection = styled.section`
  background-color: black;

  .square-off-site-margin {
    padding-top: 1.45rem;
  }
  
  .feature-block {
    background-color: black;
    color: white;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: [col1-start] 20fr  [col2-start] 20fr  [col3-start] 60fr [col3-end];
    grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
    min-height: 500px
  }

  .small-feature-one {
    grid-column: col1-start / col3-start;
    grid-row: row1-start ;
  }

  .small-feature-two {
    grid-column: col1-start / col3-start;
    grid-row: row2-start ;
  }

  .large-feature {
    grid-column: col3-start ;
    grid-row: row1-start / row2-end;
    width: 100%;
  }

  .chevron {
    color: black; 
    border: .334rem solid white; 
    padding: .5rem;
    display: flex;
    
    > div {
      background-color: white; 
      flex: 1;
      padding: 1.5rem;
    }
  }

`;

const AWARD_WINNER = {
  name: 'Michael Cunningham',
  company: 'Kingdom Keepers',
  website: 'https://www.kingdomkeepersoutreach.org/',
  about: 'Michael is a husband, father, founder and entrepreneur making a difference in the lives of at risk folks in our community. He and his team have grown Kingdom Keepers, a non profit that gets shoes and food into the hands of folks facing housing insecurity. Join us this week as he reflects on his story and tells us about how his process of going from wantrepreneur to entrepreneur evolved.',
  episode: '25'
}

const FeatureBlock = () => (
  <StyledSection>
    <div className="site-margin square-off-site-margin">
      <div className="feature-block">
        <div className="small-feature-one chevron">
          <div>
            <h2>This months book</h2>
            <h3>{BOOKS[0].title} &nbsp;&nbsp;&nbsp;<br /><small>{BOOKS[0].author}</small></h3>
            <a href={BOOKS[0].link} target="_blank" rel="noreferrer">Buy it here</a>
          </div>
        </div>
        <div className="small-feature-two chevron">
          <div>
            <AudioCard
              title="Episode 25"
              art="https://www.theprocessisblackandwhite.com/images/logo2.png"
              source="http://cast.rocks/hosting/26747/Episode-25.mp3"
              skipBackSeconds={10}
              skipForwardSeconds={30}
            />
          </div>
        </div>
        <div className="large-feature chevron">
          <div>
            <h3>Jerami Grant Award Winner</h3>
            <p>{AWARD_WINNER.name} - <a href={AWARD_WINNER.website} target="_blank">{AWARD_WINNER.company}</a></p>
            <p>{AWARD_WINNER.about}</p>
            <p>Listen to his story on episode {AWARD_WINNER.episode}</p>
          </div>
        </div>
      </div>
    </div>
  </StyledSection>
)

export default FeatureBlock