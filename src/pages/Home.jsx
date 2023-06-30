import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
const Home = () => {
    return (
        <div className="grid-layout">
            <div className="principal">
                <main id='home'>

                    <h1>Desenvolvedor Front-end<span id="mySpan">.</span> </h1>
                    <p>Trabalhando e ajudando pessoas ao redor do mundo com a tecnologia!</p>

                    <div className="icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={28} />
                        </a>
                    </div>
                </main >
            </div>
        </div>
    )
}

export default Home;
