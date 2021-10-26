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
    --headline-1: 5vw;
    --headline-2: 3vw;
    --headline-3: 1.875rem;
    --headline-4: 1.3125rem;
    --width-l: calc(100% - 100px);
    --width-l-m: calc(100% - 60px);
    --width-2: calc(100% - 0px);
    --width-3: calc(100% - 50px);
    --width-4: calc(100% - 30px);
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
        width: 100vw;
        overflow-x: hidden;
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
b,
strong {
  font-family: var(--custom);
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

h1, h2 {
  font-family: var(--bold);
}
h1, h2, h3, h4, h5 {
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
}

.line-b {
    width: 100%;
    border-bottom: thin solid white;
    background-color: white;
    position: absolute;
    bottom: 0;
  }
.line-t {
    width: 100%;
    border-top: thin solid white;
    background-color: white;
    position: relative;
    top: 25px;
    z-index: 1;
  }

.line-r {
    border-right: thin solid white;
    height: 100%;
    background-color: white;
    position: absolute;
    right: -50px;
    top: 0;
  }

.line-l {
    border-left: thin solid white;
    height: 100%;
    background-color: white;
    position: absolute;
    left: -50px;
    top: 0;
  }

.absolute.line-l {
  position: absolute;
  left: 25px;
  top: 0;
  z-index: 2;
  @media (max-width: 1000px) {
    left: 15px;
  }
}
.absolute.line-r {
  position: absolute;
  right: 25px;
  top: 0;
  z-index: 2;
  @media (max-width: 1000px) {
    right: 15px;
  }
}

.padding-top-50 {
  margin-top: 50px;
}
.padding-bottom-50 {
  margin-bottom: 50px;
}
.padding-bottom-50-m {
  @media (max-width: 860px) {
    padding-bottom: 50px;
  } 
}

.padding-bottom25 {
  margin-bottom: 25px;
}
.padding-top25 {
  margin-top: 25px;
}

.height-25 {
    height: calc(100% - 25px);
}

.height-100 {
  height: 100%;
}

.bottom-25 {
  bottom: 25px;
}

.bottom-25-m {
  @media (max-width: 860px) {
    bottom: 25px;
  }
}

.background-white {
  background-color: #FFFFFF;
  color: var(--dark-gray);
  a {
    color: var(--dark-gray);
  }
}

.dark-gray {
  color: var(--dark-gray);
  background-color: var(--dark-gray);
  border-color: var(--dark-gray);
}

.white-m {
  @media (max-width: 860px) {
    color: white;
    background-color: white;
    border-color: white;
  }
}
.dark-gray-m {
  @media (max-width: 860px) {
    color: var(--dark-gray);
    background-color: var(--dark-gray);
    border-color: var(--dark-gray);
  }
}

.line-l-width-50 {
  width: 50px;
}
.line-r-width-50 {
  width: 50px;
}

.top-0 {
  top: 0;
}

.margin-top-50 {
  margin-top: 50px;
}

.green-background {
    background-color: var(--green);
    border-color: var(--green);
    color: white;
}

.no-bg {
  background-color: transparent;
}

.color-white {
  color: white;
}



.b-50 {
  height: calc(100% - 50px);
}

.t-50 {
  height: calc(100% - 50px);
  top: 50px;
}

.mid {
  position: absolute;
  top: 50%;
  left: -25px;
  width: calc(100% + 50px);
  height: 1px;
  background-color: #FFFFFF;
}

.hide-d {
  @media (min-width: 860px) {
    display: none !important;
  }
}

.hide-m {
  @media (max-width: 860px) {
    display: none !important;
  }
}


/* @media (max-width: 1000px) {
    .line-r {
        right: -15px;
    }
} */

`
