import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {

    const icons = [
        { iconComponent: FaTwitter, href: "" },
        { iconComponent: FaFacebook, href: "" },
        { iconComponent: FaInstagram, href: "" },
    ]
    return (
        <main
            id="home">
            <motion.h1
                initial={{ opacity: 0, y: -450 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
            >
                Desenvolvedor Front-end<span id="mySpan">.</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                Trabalhando e ajudando pessoas ao redor do mundo com tecnologia!
            </motion.p>

            <div
                className="icons">
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -250 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ delay: index * 0.1 }}>
                        <a
                            href={icon.href}
                            target="_blank"
                            rel="noopener noreferrer">
                            {icon.iconComponent && (
                                <icon.iconComponent size={28} />
                            )}
                        </a>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default Home;
