import React from "react";
import Typography from '../styles/Typography';

const mainBox = {
  color: 'white',
  backgroundColor: 'black',
  height: '500px',
  width: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const whiteBox = {
  backgroundColor: 'white',
  height: '480px',
  width: '480px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const blackBox = {
  padding: '20px',
  backgroundColor: 'black',
  height: '460px',
  width: '460px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '26px',
  lineHeight: '1.25',
}

const episodeTitleStyles = {
  fontSize: '42px',
  marginBottom: '10px',
}

const showTitleStyles = {
  display: 'flex',
  fontFamily: 'Abril',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '0',
  fontSize: '66px',
}

const ogImage = ({ pageContext }) => { 
  const [episodeNumber, episodeTitle] = pageContext.title.split("-");
  const releaseDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(pageContext.date))
  const time = pageContext.duration.split(":")[1]
  
  return (
  <>
    <Typography />
    <div style={mainBox}>
      <div style={whiteBox}>
        <div style={blackBox}>
          <div>
            <div style={episodeTitleStyles}>
              <span style={{
                fontSize: '34px'
                }}>{episodeNumber}<br />
              </span>
              {episodeTitle}
            </div>
            <div>{releaseDate}</div>
            <div>{time} minutes</div>
          </div>
          <h2 style={showTitleStyles}>TPIBAW <span
            style={{
              fontFamily: 'Robo',
              fontSize: '18px',
              marginBottom: '10px',
            }}
          >since 2020</span></h2>
        </div>
      </div>
    </div>
  </>
)};

export default ogImage