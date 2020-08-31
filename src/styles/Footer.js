import styled from 'styled-components';

const Footer = styled.footer`
    /* width: 100vw; */
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
`;

export { Footer };