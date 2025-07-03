import { useState, useEffect } from 'react';
import './navbar.css'

export function Navbar() {
    const [nav, setNav] = useState('');

    useEffect(()=>{
        console.log('Ativou efeito colateral!')
    });

    return (
        <nav>Qualque coisa</nav>
    );
};

export function SubNavbar() {
    return (
        <nav className='subnav'>Isso é um subnavbar</nav>
    );
};