import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from "react-icons/fi";
import "./Header.css";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const navigation = [
        { nav: "Home", href: "/" },
        { nav: "About", href: "/about" },
        { nav: "Setup", href: "/setup" },
        { nav: "Skills", href: "/skills" },
        { nav: "Contact", href: "/contact" },
    ];

    function handleClick() {
        setOpen(!isOpen);
    }

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
    }

    const translateAnimation = {
        initial: { opacity: 0.1, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };

    return (
        <header>
            <nav>
                <Hamburger
                    direction="right"
                    duration={0.1}
                    easing="ease-in"
                    toggled={isOpen}
                    toggle={setOpen}
                />
                <ul className={isOpen ? "mobile-menu" : "desk-menu"}>
                    {navigation.map((item, i) => (
                        <motion.li
                            {...translateAnimation}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            onClick={handleClick}
                        >
                            <Link
                                to={item.href}
                                style={{
                                    transition: 'border 0.2s ease',
                                    borderBottom: location.pathname === item.href ? '2px solid var(--color-special)' : '',
                                }}
                            >
                                {item.nav}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                <motion.div
                    {...translateAnimation}
                    transition={{ delay: 0.5 }}
                    className="logo"
                    onClick={toggleTheme}
                >
                    <span className="theme-icon">
                        {isDarkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
                    </span>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;
