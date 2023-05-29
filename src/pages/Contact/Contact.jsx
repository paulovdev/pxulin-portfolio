import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonContact } from '../../components/Global/Button';
import { Text, Title } from '../../components/Global/Texts';
import { Wrapper, FormContainer, Contacts } from './Contact.styles';

function Contact() {
  const contacts = React.useMemo(() => [
    {
      logo: 'mail-outline',
      text: 'fudevil123@gmail.com'
    },
    {
      logo: 'call-outline',
      text: '+55 (21) 96991-5011'
    },
    {
      logo: 'person-outline',
      text: 'Paulo Vitor'
    },
    {
      logo: 'location-outline',
      text: 'Brasil - RJ'
    },
  ], []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    {/** e.preventDefault(); **/}

    fetch('http://localhost:5000/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setName('');
        setEmail('');
        setMessage('');
        window.open('http://localhost:5000/success-page'); 
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
        <Title>
          Contato<span style={{ color: 'var(--special-color)' }}>:</span>
        </Title>
        <Text>Me mande uma mensagem!</Text>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Wrapper>
          <FormContainer onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="10"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <ButtonContact type="submit">Enviar</ButtonContact>
          </FormContainer>
          <Contacts>
            {contacts.map((item, index) => (
              <div className="contact-wrapper" key={index}>
                <ion-icon name={item.logo}></ion-icon>
                <p>{item.text}</p>
              </div>
            ))}
          </Contacts>
        </Wrapper>
      </motion.div>
    </>
  );
}

export default Contact;
