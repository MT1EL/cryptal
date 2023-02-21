import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./assets/fonts/HelveticaNeue.ttc') format('ttc'), url('./assets/fonts/HelveticaNeue.ttc') format('ttc');
        unicode-range: U+10A0-U+10FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: 'HelveticaCaps';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./assets/fonts/helvetica-neue-lt-geo-55-roman-caps.ttf') format('ttf');
        unicode-range: U+10A0-U+10FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }`}
  />
);

export default Fonts;
