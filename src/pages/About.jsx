import React from 'react'

const About = () => {
    return (
        <div className="grid-layout">
            <div className="principal">
                <main id='about'>
                    <div className="text-container">
                        <h1>Sobre mim<span id="mySpan">.</span></h1>
                        <p>Olá, meu nome é Paulo Vitor e tenho 19 anos.</p>
                        <p>Sou apaixonado por tecnologia desde os 10 anos de idade. Recentemente, descobri a programação e tenho me dedicado intensamente para me tornar um ótimo desenvolvedor. Meu foco é construir aplicações web avançadas com ênfase em desempenho utilizando ferramentas como o Visual Studio Code.</p>
                        <p>Também gosto de criar jogos com a engine Construct e produzir música profissional com o FL Studio. Estou sempre ansioso para aprender e aprimorar minhas habilidades como desenvolvedor.</p>
                    </div>
                    <div className="image-container">
                        <img
                            src="/perfil_photo.jpg"
                            alt="Profile"
                        />
                    </div>
                </main>
            </div>
        </div >
    )
}

export default About
