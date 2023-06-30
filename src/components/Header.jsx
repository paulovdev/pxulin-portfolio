import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const navigation = [
        { nav: "Inicio", href: "/" },
        { nav: "Sobre", href: "/about" },
        { nav: "Contato", href: "/contact" },
        { nav: "Setup", href: "/setup" },
        { nav: "Skills", href: "/skills" },
    ];
    function handleClick() {
        setOpen(!isOpen)
    }
    return (
        <header>
            <nav>
                <Hamburger direction='right' duration={0.1} easing="ease-in" toggled={isOpen} toggle={setOpen} />
                <ul className={isOpen ? 'mobile-menu' : 'desk-menu'}>
                    {navigation.map((item, index) => (
                        <li key={index} onClick={handleClick}><Link to={item.href}> {item.nav}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
