import React from 'react';
import { Footer as FooterStyles } from '../assets/styles';

const Footer = () => {
    return (
        <FooterStyles>
            <p>Copyright 2020 MilolaSewciety</p>
            <p>Designed and Developed by <a href='https://thetimoye.netlify.app' target='_blank' rel='noopener noreferrer'>thetimoye</a></p>
        </FooterStyles>
    );
};

export { Footer }