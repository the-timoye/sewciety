import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const theme = {
    colors: {
        primary: '#890707',
        primary_faded: 'rgba(137, 7, 7, 0.7)',
        secondary: '#e8d2a3',
        white: '#ffffff',
        black: '#000000'
    },
    breakpoints: {
        s_phone: 0,
        phone: 480,
        tab_portrait: 800,
        tab_landscape: 1024,
        desktop: 1200,
    },
}


export default createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 45%; /* 10px == 1rem */
    scroll-behavior: smooth;
    transition: scroll  2s ease;


    ${breakpoint('tab_portrait')`
        font-size: 50%;
    `};
    ${breakpoint('desktop')`
        font-size: 62.5%;
    `};
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    line-height: 1.17;
    font-weight: 400;
    letter-spacing: 2px;
    overflow-x: hidden;

    ${breakpoint('tab_portrait')`
        font-size: 1.3rem;
    `};

    ${breakpoint('desktop')`
        font-size: 1.4rem; /* 10px == 1rem */
    `};
}

h1,h2,h3,h4,h5 {
    font-weight: 700;
}
p {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: #890707;
}
a {
    cursor: pointer;
    text-decoration: none;
}
ul {
    list-style-type: none;
}
`

export { theme }