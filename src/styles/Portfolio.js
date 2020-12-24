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

const ImagesContainer = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;

    div {
        margin: 0 .3rem .3rem .3rem;
        width: 25rem;
        /* height: 30rem; */
            &.center{
                width: 45rem;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap; 
                justify-content: space-between; 
                img {
                    width: 49%;
                    margin-bottom: .3rem;
                }
            }
            &.left-side {
                align-self: flex-start;
                margin-right: auto;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &.right-side {
                align-self: flex-start;
                margin-left: auto;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
    }


`;

export { Portfolio, ImagesContainer };