import styled from 'styled-components';

const About = styled.div`
    height: 35rem;
    margin-top: 5rem;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.white};

    .about-text-content {
        width: 35%;
        display: block;
        
        margin-left: 12rem;

        p {
            margin: 3rem 0;
        }
    }
    
`;

const CompanyBrief = styled.div`
    height: 45rem;
    width: 30rem;
    position: absolute;
    top: -5rem;
    right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: -3px 5px 15px 0 ${({ theme: { colors } }) => colors.primary_faded};

    .read-more-button {
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