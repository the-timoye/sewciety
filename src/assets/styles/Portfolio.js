import styled from 'styled-components';

const Portfolio = styled.div`
    margin-top: 5rem;
    margin: 0;
    padding: 12rem 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(137, 7, 7, 0.06);
 `;


const CenterImages = styled.div`
    width: 85rem;
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;

    img {
        width: 20rem;
        margin-bottom: 0.5rem;
    }

    img:not(:nth-child(4)) {
        margin-right: 0.5rem;
    }

`;

export { Portfolio, CenterImages };