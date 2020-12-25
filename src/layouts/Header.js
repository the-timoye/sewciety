import React from 'react';
import { HomeBanner, Button } from '../assets/styles';

export const Header = () => {
    return (
        <HomeBanner>
            <div className='landing-info-container'>
                <h2>look your best in our wears</h2>
                <p>Join the Sewciety</p>
                <Button primary href='/'>Get Started</Button>
            </div>
        </HomeBanner>
    )
}