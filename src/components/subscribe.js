import React from "react"

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
  <section style={{ backgroundColor: `black`, color: `white`, border: `2px solid white`, padding: `.5rem` }}>
    <div style={{ border: `.334rem solid white`, padding: `1.5rem` }}>
      <h4 style={{
        fontWeight: 400,
        fontFamily: `Abril Fatface`,
      }}>Subscribe</h4>
      <div style={{ fontSize: `2rem` }}>
        <ul style={{ marginLeft: 0, listStyle: `none`, display: `flex`, flexDirection: `row`, justifyContent: `space-between` }}>
          {SERVICES.map(service => (
            <li style={{}}>
              <a
                style={{ color: `white`, textDecoration: `none` }}
                target="_blank"
                href={service.link}
                rel="noopener noreferrer"
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section >
)

export default Subscribe