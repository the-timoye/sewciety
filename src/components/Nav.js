import React from 'react';
import { Navigation } from '../styles';
import { Link } from 'react-router-dom'

const navItems = ['home', 'about', 'portfolio', 'shop', 'contact'];

const Nav = () => {
    return (
        <Navigation>
            <ul>
                {navItems.map((item, index) => <li key={index}><Link to={item === 'home' ? '/' : item}>{item}</Link></li>)}
            </ul>
        </Navigation>
    )
}

export { Nav };