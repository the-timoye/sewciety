import React from 'react';
import { About as AboutStyles, Button, CompanyBrief } from '../assets/styles';
import scissors from '../assets/images/scissors.png';

export const About = () => {
    return (
        <AboutStyles id="about">
            <div className='about-text-content'>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
                <Button primary href='/'>Read More </Button>
            </div>

            <CompanyBrief>
                {/* <p>THE SEWCIETY</p> */}
                <img src={scissors} alt='milola-scissors' />
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div className="read-more-button">t</div>
            </CompanyBrief>

        </AboutStyles>
    )

}