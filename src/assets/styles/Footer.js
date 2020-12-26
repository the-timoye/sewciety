import styled from 'styled-components';

const Footer = styled.footer`
    padding: 3rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.primary};
    p {
        color: ${({ theme: { colors } }) => colors.white};
    }
    a {
        color: ${({ theme: { colors } }) => colors.white};
        text-decoration: underline;
    }
`;

export { Footer };