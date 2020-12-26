import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Contact = styled.div`
display: flex;
flex-wrap: wrap;

.contact-section-one {
    width: 100%;
    background: rgba(137, 7, 7, 0.5);
    ${breakpoint('desktop')`
        width:50%;
    `};
    img {
        width: 100%;

        ${'' /* ${breakpoint('desktop')`
            width:100%;
        `}; */}
    }

}
.contact-section-two {
    padding: 2rem;

    .contact-form {
        margin: 10rem 0;
        padding: 5rem;
     
        box-shadow: 3px 5px 25px 5px rgba(137, 7, 7, 0.15);
        p {
            font-weight: 700;
        }
        form {
            .form-input {
                margin-bottom: 2rem;
            }
            label, input {
                display: block;
            }
            label {
                color: ${({ theme: { colors } }) => colors.primary};
                margin-bottom: .5rem;
                /* font-weight: 600; */
            }
            input, textarea {
                width: 100%;
                padding: 1rem;
                outline: rgba(137, 7, 7, 0.15);
                border: 1px solid ${({ theme: { colors } }) => colors.primary};
            }
            textarea{
                height: 20rem;
            }
        }

    }

}

`