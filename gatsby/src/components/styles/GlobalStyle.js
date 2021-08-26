import { createGlobalStyle } from "styled-components"

import akzeot from '../../assets/fonts/AkzidenzGroteskBQ-MdCndAlt.eot';
import akzwoff from '../../assets/fonts/AkzidenzGroteskBQ-MdCndAlt.woff';
import akzwoff2 from '../../assets/fonts/AkzidenzGroteskBQ-MdCndAlt.woff2';

import suseot from '../../assets/fonts/SuisseBPIntl-Antique.eot';
import suswoff from '../../assets/fonts/SuisseBPIntl-Antique.woff';
import suswoff2 from '../../assets/fonts/SuisseBPIntl-Antique.woff2';

import suslieot from '../../assets/fonts/SuisseBPIntl-Light.eot';
import susliwoff from '../../assets/fonts/SuisseBPIntl-Light.woff';
import susliwoff2 from '../../assets/fonts/SuisseBPIntl-Light.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Akzidenz-Grotesk BQ';
    src: url('${akzeot}');
    src: url('${akzeot}?#iefix') format('embedded-opentype'),
        url('${akzwoff2}') format('woff2'),
        url('${akzwoff}') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Suisse BP Intl Antique';
    src: url('${suseot}');
    src: url('${suseot}?#iefix') format('embedded-opentype'),
        url('${suswoff2}') format('woff2'),
        url('${suswoff}') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Suisse BP Intl Light';
    src: url('${suslieot}');
    src: url('${suslieot}?#iefix') format('embedded-opentype'),
        url('${susliwoff2}') format('woff2'),
        url('${susliwoff}') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

:root {
    --bold: 'Akzidenz-Grotesk BQ', sans-serif;
    --custom: 'Suisse BP Intl Antique', sans-serif;
    --reg: 'Suisse BP Intl Light', sans-serif;
    --headline-1: 3.75rem;
    --headline-2: 2.18rem;
    --headline-3: 1.875rem;
    --headline-4: 1.3125rem;
    --width-l: calc(100% - 50px);
    --paragraph: 1rem;
    --green: #06262D;
    --gray: #E0DEDB;
    --dark-gray: #575D63;
    --black: #000000;
    --white: #FFFFFF;
    overflow-wrap: break-word;
}

    html {
      scroll-behavior: smooth;
    }
    body {
        background-color: var(--gray);
        font-family: var(--reg);
        color: var(--white);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        font-feature-settings: 'salt' on;
    }

    main {
      background: var(--gray) !important;
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }


a {
    color: white;
}

h1 {
    font-weight: normal;
}
h2 {
    font-size: var(--headline-2);
    font-weight: normal;
}
h3 {
    font-size: var(--headline-3);
    font-weight: normal;
}
p, a, li, .paragraph {
  font-size: var(--paragraph);
  line-height: 132%;
}

.hide {
  display: none !important;
}

.column {
  position: relative;
  .line-b {
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    bottom: 0;
  }
}
`