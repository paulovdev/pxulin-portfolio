import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { ButtonArrow } from '../Global/Button';
import Details from './Details';

function Slide() {
    const slides = React.useMemo(() => [
        {
            title: 'Projetos',
            details: 'Confira meus projetos no GitHub',
            href: 'https://github.com/pxulin?tab=repositories',
        },
        {
            title: 'Jogos',
            details: 'Jogue meus jogos (antigos) no itch.io',
            href: 'https://paulinhx.itch.io/',
        },
        {
            title: 'Música',
            details: 'Escute uma de minhas músicas do SoundCloud',
        },
    ], []);

    const [activeSlide, setActiveSlide] = useState(0);

    const handleNextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <Details
                title={slides[activeSlide].title}
                details={slides[activeSlide].details}
                href={slides[activeSlide].href}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ marginTop: '1em', alignSelf: 'center' }}
            >
                <ButtonArrow
                    onClick={handlePrevSlide}
                    disabled={activeSlide === 0}
                    title="Slide anterior"
                    aria-label="Slide anterior"
                >
                    <AiOutlineArrowLeft size={24} />
                </ButtonArrow>
                <ButtonArrow
                    onClick={handleNextSlide}
                    disabled={activeSlide === slides.length - 1}
                    title="Próximo slide"
                    aria-label="Próximo slide"
                >
                    <AiOutlineArrowRight size={24} />
                </ButtonArrow>
            </motion.div>
        </>
    );
}

export default Slide;
