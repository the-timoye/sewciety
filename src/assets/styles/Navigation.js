import styled from 'styled-components';

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    padding: 2rem 2.5rem;
    width: 40%;
    background: ${({ theme: { colors } }) => colors.primary};
    z-index: 1000;

    ul {
        li {
            display: inline-block;
            
             a {
                 margin-right: 2rem;
                padding: .5rem 0;
                text-transform: capitalize;
                color: ${({ theme }) => theme.colors.white};
                transition: all .3s ease;
                
                 &:hover {
                     border: none;
                     border-bottom: 2px solid ${({ theme: { colors } }) => colors.white};
                 }
            }
        }
    }
`;

export { Navigation };