import React from "react"
import { Facebook, Twitter, Linkedin, Mail } from 'react-feather';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
align-items: center;

  > button {
    margin: .5rem;
  }

  > h5 {
    display: inline;
    margin: 0;
  }
`


const ShareButtons = ({ url, title, description }) => (
  <StyledContainer>
    <h5>Process with a friend:</h5>
    <EmailShareButton subject={title} body={description}>
      <Mail strokeWidth={1.75} />
    </EmailShareButton>

    <FacebookShareButton url={url} quote={description}>
      <Facebook strokeWidth={1.75} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} title={title} summary={description}>
      <Linkedin strokeWidth={1.75} />
    </LinkedinShareButton>

    <TwitterShareButton url={url} title={description}>
      <Twitter strokeWidth={1.75} />
    </TwitterShareButton>
  </StyledContainer>
);

export default ShareButtons;