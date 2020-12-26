import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    padding: 2rem 2.5rem;
    width: 80%;
    background: ${({ theme: { colors } }) => colors.primary};
    z-index: 1000;

    ${breakpoint('tab_portrait')`
        width: 50%;
    `};

    ${breakpoint('desktop')`
        width: 40%;
    `};

    ul {
        display: flex;
        justify-content: space-between;
        li {
            display: inline-block;
            padding: .5rem 0;

            hr {
                    display: none;
                    border-bottom: 1px solid ${({ theme: { colors } }) => colors.white};
                    margin-top: 5px;
                    width: 100%;
                }
            
             a {
                text-transform: capitalize;
                color: ${({ theme }) => theme.colors.white};
            }

            &:hover hr{
                     display: block;
                     border-bottom: 1px solid ${({ theme: { colors } }) => colors.white};
                 }
        }
    }
`;

export { Navigation };