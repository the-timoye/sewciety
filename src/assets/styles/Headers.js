import styled from 'styled-components';
import bgImage from '../images/milola-header-image.jpg';
// import { theme } from './GlobalStyles';

const HomeBanner = styled.header`
    position: relative;
    height: 95vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f7f7f7;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);

    .alice-carousel ul li {
        ${'' /* width: 100%; */}
        height: 95vh;
    }

    .alice-carousel ul li img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slides-overlay {
        position: absolute;
        top: 0;
        height: 95vh;
        WIDTH: 100%;
        background: #000000ab;
        clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);

    }

    .landing-info-container {
        position: absolute;
        top: 40%;
        left: 3rem;
        color: #fff;
        text-transform: uppercase;
        h2 {
            font-size: 2rem;
            display: block;
            letter-spacing: 3px;
        }
        p {
            margin-top: 1rem;
            margin-bottom: 3rem;
            letter-spacing: 5px;
            color: ${({ theme: { colors } }) => colors.white};
        }
    }
`;



export { HomeBanner };