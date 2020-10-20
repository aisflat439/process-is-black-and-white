import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background-color: black; 
  color: white; 
  border: 2px solid white; 
  padding: .5rem;

  h4 {
    @media (max-width: 900px) {
      text-align: center;
    }
  }

  li {
    text-align: center;
   
    @media (max-width: 900px) {
      flex-direction: column;
      padding: .5rem;
    }
  }
`;

const StyledList = styled.ul`
  margin-left: 0; 
  list-style: none; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const SERVICES = [
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/show/6YLsCJZltu9OjrhoVpvb3S?si=VyAsElxUSjq2L8oMkHy22w',
  },
  {
    name: 'iTunes',
    link: 'https://podcasts.apple.com/us/podcast/the-process-is-black-and-white/id1522319202',
  },
  {
    name: 'Google Podcast',
    link: 'https://podcasts.google.com/feed/aHR0cDovL2Nhc3Qucm9ja3MvaG9zdGluZy8yNjc0Ny9mZWVkcy82RUs5Vi54bWw'
  },
  {
    name: 'PocketCasts',
    link: 'https://pca.st/podcast/2e92dca0-a1d6-0138-e669-0acc26574db2'
  },
  {
    name: 'RSS',
    link: 'http://cast.rocks/hosting/26747/feeds/6EK9V.xml'
  },
]

const Subscribe = () => (
  <StyledSection>
    <div style={{ border: `.334rem solid white`, padding: `1.5rem` }}>
      <h4 style={{
        fontWeight: 400,
        fontFamily: `Abril Fatface`,
      }}>Subscribe</h4>
      <div style={{ fontSize: `2rem` }}>
        <StyledList>
          {SERVICES.map(service => (
            <li key={service.name.replace(' ', '-')} style={{}}>
              <a
                style={{ color: `white`, textDecoration: `none`, lineHeight: '125%' }}
                target="_blank"
                href={service.link}
                rel="noopener noreferrer"
              >
                {service.name}
              </a>
            </li>
          ))}
        </StyledList>
      </div>
    </div>
  </StyledSection>
)

export default Subscribe