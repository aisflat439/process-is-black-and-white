import React from "react";
import styled from 'styled-components'

const ChevronDiv = styled.div`
  color: white;
  background-color: black;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .white-box {
    background-color: white;
    height: 480px;
    width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .black-box {
    padding: 20px;
    background-color: black;
    height: 460px;
    width: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 26px;
    line-height: 1.25;

    .episode-title {
      font-size: 48px;
      margin-bottom: 10px;

      span {
        font-size: 32px;
      }
    }
  }

  .show-title {
    display: flex;
    font-family: Abril;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0;
    font-size: 66px;

    span {
      font-family: Robo;
      font-size: 18px;
      margin-bottom: 10px
    }
  }
`

const ogImage = ({ pageContext }) => { 
  const [episodeNumber, episodeTitle] = pageContext.title.split("-");
  const releaseDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(pageContext.date))
  const time = pageContext.duration.split(":")[1]
  
  return (
  <ChevronDiv>
    <div className="white-box">
      <div className="black-box">
        <div>
          <div className="episode-title"><span>{episodeNumber}<br /></span>{episodeTitle}</div>
          <div>{releaseDate}</div>
          <div>{time} minutes</div>
        </div>
        <h2 className="show-title">TPIBAW <span>since 2020</span></h2>
      </div>
    </div>
  </ChevronDiv>
)};

export default ogImage