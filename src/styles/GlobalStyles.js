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
    letter-spacing: 2px;
    overflow-x: hidden;
    background-color: ${({ theme: { colors } }) => colors.secondary};
}

h1,h2,h3,h4,h5 {
    font-weight: 700;
}
a {
    cursor: pointer;
    text-decoration: none;
}
ul {
    list-style-type: none;
}
`

const theme = {
    colors: {
        primary: '#890707',
        primary_faded: 'rgba(137, 7, 7, 0.7)',
        secondary: '#e8d2a3',
        white: '#ffffff',
        black: '#000000'
    }
}

export { theme }