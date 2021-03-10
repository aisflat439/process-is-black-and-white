import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/AbrilFatface-Regular.ttf';
import robo from '../assets/fonts/Roboto-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: AbrilFatface;
    src: url(${font});
  }
  @font-face {
    font-family: Robo;
    src: url(${robo});
  }
  html, body, h3 {
    font-family: Robo, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  h2 {
    font-family: AbrilFatFace;
  }
`;

export default Typography;