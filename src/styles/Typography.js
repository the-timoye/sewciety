import styled from 'styled-components';

const sectionHeader = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme: { colors } }) => colors.primary};
`;

export { sectionHeader };