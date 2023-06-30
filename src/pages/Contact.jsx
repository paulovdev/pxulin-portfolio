import React from "react";

const Contact = () => {
    return (
        <div className="grid-layout">
            <div className="principal">
                <main id="contact">
                    <h1>Contato<span id="mySpan">.</span></h1>
                    <p>Envie-me uma mensagem!</p>
                    <form>
                        <div className="col-1">
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                required
                            />
                        </div>

                        <div className="col-2">
                            <input
                                type="text"
                                placeholder="Assunto"
                                required
                            />

                            <textarea
                                placeholder="Mensagem"
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Contact;
