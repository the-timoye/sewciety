import styled from 'styled-components';
import bgImage from '../assets/images/milola-header-image.jpg'
import { theme } from './GlobalStyles';

const HomeBanner = styled.header`
    /* width: 100vw; */
    height: 95vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);

    .landing-info-container {
        margin-left: 3rem;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        h2 {
            font-size: 2rem;
            display: block;
            letter-spacing: 3px;
        }
        p {
            margin: 1rem;
            margin-bottom: 3rem;
            letter-spacing: 5px;
            color: ${({ theme: { colors } }) => colors.white};
        }
    }
`;

export { HomeBanner };