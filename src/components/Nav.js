import React from 'react';
import { Navigation } from '../assets/styles';
// import { Link } from 'react-router-dom'

const navItems = ['home', 'about', 'portfolio', 'shop', 'contact'];

const Nav = () => {
    return (
        <Navigation>
            <ul>
                {navItems.map((item, index) => <li key={index}><a href={`#${item}`}>{item} </a> <hr /> </li>)}
            </ul>
        </Navigation>
    )
}

export { Nav };