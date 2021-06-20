import { createGlobalStyle } from 'styled-components';
import "./fonts.css"

const Typography = createGlobalStyle`
  html, body, h3 {
    font-family: Robo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h2 {
    font-family: AbrilFatFace;
  }
`;

export default Typography;