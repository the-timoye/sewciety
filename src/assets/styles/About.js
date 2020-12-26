import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const About = styled.div`
    height: 80rem;
    margin-top: 5rem;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.white};

    ${breakpoint('desktop')`
        height: 35rem;
    `};

    .about-text-content {
        width: 85%;
        display: block;
        margin: 20rem auto 0 auto;
        

        ${breakpoint('desktop')`
            width: 35%;
            margin: 0;
            margin-left: 12rem;
        `};

        p {
            margin: 3rem 0;
        }
    }
    
`;

const CompanyBrief = styled.div`
    height: 45rem;
    width: 30rem;
    position: absolute;
    top: -15rem;
    left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
    text-align: center;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: -3px 5px 15px 0 ${({ theme: { colors } }) => colors.primary_faded};

    ${breakpoint('desktop')`
        top: -5rem;
        left: 70%;
        `};
    

    img {
        width: 5rem;
    }

    .read-more-button {
        width: 100%;
        padding: 5.7%;
        text-align: center;
        color: ${({ theme: { colors } }) => colors.white};
        font-weight: 700;
        background-color: ${({ theme: { colors } }) => colors.primary_faded};
        transition: all .5s ease;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;

export { About, CompanyBrief };