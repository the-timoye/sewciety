import styled from 'styled-components';

const Button = styled.a`
    width: auto;
    padding: 1rem 2rem;
    background-color: ${props => props.primary ? ({ theme: { colors } }) => colors.primary : 'transparent'};
    color: ${props => props.primary ? ({ theme: { colors } }) => colors.white : ({ theme: { colors } }) => colors.primary};
    font-weight: 700;
    transition: all .5s ease;

    &:hover {
    background-color: ${props => props.primary ? ({ theme: { colors } }) => colors.primary_faded : ({ theme: { colors } }) => colors.primary};
    }
`;


export { Button }