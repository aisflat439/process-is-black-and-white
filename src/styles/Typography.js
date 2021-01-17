import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/AbrilFatface-Regular.ttf';
import robo from '../assets/fonts/Roboto-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: AbrilFatface;
    src: url(${font});
  }
  @font-face {
    font-family: Roboto;
    src: url(${robo});
  }
  html, body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
`;

export default Typography;