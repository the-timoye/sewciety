import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Footer = styled.footer`
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.primary};

    ${breakpoint('desktop')`
        flex-direction: row;
    `};
    p {
        color: ${({ theme: { colors } }) => colors.white};
    }
    a {
        color: ${({ theme: { colors } }) => colors.white};
        text-decoration: underline;
    }
`;

export { Footer };