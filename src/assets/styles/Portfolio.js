import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Portfolio = styled.div`
    margin-top: 5rem;
    margin: 0;
    padding: 12rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(137, 7, 7, 0.06);

    ${breakpoint('desktop')`
        padding: 12rem 12rem;
    `}
 `;


const CenterImages = styled.div`
    width: 100%;
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;

    ${breakpoint('desktop')`
        width: 85rem;
        
    `};

    img {
        width: 30%;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;

        ${breakpoint('desktop')`
            width: 20rem;
            img:not(:nth-child(4)) {
            margin-right: 0.5rem;
        }
        `};
    }

`;

export { Portfolio, CenterImages };