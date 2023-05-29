import { motion } from 'framer-motion';
import { Title, Text } from '../../components/Global/Texts';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:5rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 30%;
  margin-right: 4rem;
  @media (max-width: 992px) {
    margin-right: 0rem;
    flex: 0 0 60%;
  }
  
  @media (max-width: 992px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  background-color: var(--primary-color);
  border-radius: 1.563rem;
  border: 0.063rem solid var(--secondary-color);
`;

const TextContainer = styled.div`
  flex: 1;
`;

function About() {
  return (
    <>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
        <Title>Sobre mim<span style={{ color: 'var(--special-color)' }}>:</span></Title>
      </motion.div>
      <AboutContainer>
        <TextContainer>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <Text>
              Como falamos, sou um desenvolvedor front-end apaixonado por música e jogos. Além de criar interfaces incríveis para a web, também dedico meu tempo livre à produção musical e à exploração do mundo dos jogos.
            </Text>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}>
            <Text>
              Adoro trabalhar em projetos desafiadores e mergulhar em textos longos e envolventes. Minha criatividade e habilidades técnicas me permitem criar experiências digitais únicas e atraentes para os usuários. Sempre busco aprimorar minhas habilidades e estar atualizado com as últimas tendências do mundo do desenvolvimento web.
            </Text>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
            <Text>
              Se você está em busca de um profissional versátil, comprometido e apaixonado pelo que faz, estou pronto para embarcar em novas aventuras e contribuir para o sucesso do seu projeto. Vamos trabalhar juntos e transformar ideias em realidade!
            </Text>
          </motion.div>
        </TextContainer>
        <ImageContainer>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <Image src="photo.jpg" alt="Profile" width='300px' />
          </motion.div>
        </ImageContainer>
      </AboutContainer>
    </>
  );
}

export default About;
