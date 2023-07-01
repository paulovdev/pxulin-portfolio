import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    return (
        <main id="about">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="text-container"
            >
                <h1>
                    Sobre mim<span id="mySpan">.</span>
                </h1>
                <motion.p>
                    Olá, meu nome é Paulo Vitor e tenho 19 anos.
                </motion.p>
                <motion.p>
                    Sou apaixonado por tecnologia desde os 10 anos de idade. Recentemente, descobri a programação e tenho me dedicado intensamente para me tornar um ótimo desenvolvedor. Meu foco é construir aplicações web avançadas com ênfase em desempenho utilizando ferramentas como o Visual Studio Code.
                </motion.p>
                <motion.p>
                    Também gosto de criar jogos com a engine Construct e produzir música profissional com o FL Studio. Estou sempre ansioso para aprender e aprimorar minhas habilidades como desenvolvedor.
                </motion.p>
            </motion.div>

            <div className="image-container">
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    src="/perfil_photo.jpg"
                    alt="Profile"
                />
            </div>
        </main>
    );
};

export default About;
