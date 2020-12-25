import styled from 'styled-components';

const MarginTop = styled.span`
    display: inline-block;
    margin-top: ${props => props.size ? `${props.size}rem` : `1rem`};
`;

const MarginBottom = styled.span`
    display: inline-block;
    margin-bottom: ${props => props.size ? `${props.size}rem` : `1rem`};
`

const Margin = styled.span`
    display: inline-block;
    margin: ${props => props.size ? `${props.size}rem` : `1rem`};
`

export { MarginTop, MarginBottom, Margin }