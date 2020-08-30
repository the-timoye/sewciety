import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%; /* 10px == 1rem */
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    line-height: 1.17;
    font-weight: 400;
}

h1,h2,h3,h4,h5 {
    font-weight: 700;
}

`