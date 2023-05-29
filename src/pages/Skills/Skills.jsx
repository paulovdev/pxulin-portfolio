import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AddInfo from '../../components/SkillsComponent/AddInfo';
import Card from '../../components/SkillsComponent/Card';
import { Title, Text } from '../../components/Global/Texts'
import { SkillsContainer, SkillsMenu } from './Skills.styles'

function Skills({ showBackgroundBlur }) {

  const skills = React.useMemo(
    () => [
      {
        logo: 'logo-html5',
        title: 'Desenvolvimento Front-end',
        description:
          'Tenho habilidades sólidas em desenvolvimento front-end, utilizando tecnologias como HTML5, CSS3 e JavaScript. Com essas ferramentas, sou capaz de criar interfaces de usuário interativas para websites e aplicativos web.',
      },
      {
        logo: 'logo-css3',
        title: 'Design Responsivo',
        description:
          'Tenho habilidades com design responsivo, o que significa que posso criar designs web que se adaptam perfeitamente a diferentes dispositivos e tamanhos de tela. Isso garante uma experiência consistente e agradável para os usuários, independentemente do dispositivo que estão usando.',
      },
      {
        logo: 'logo-nodejs',
        title: 'Desenvolvimento Back-end',
        description:
          'Tenho experiência em desenvolvimento back-end, com foco em Node.js. Isso me permite criar aplicações web escaláveis e eficientes, além de trabalhar com APIs para integração com outros sistemas e serviços. Estou pronto para enfrentar os desafios do lado do servidor.',
      },
      {
        logo: 'logo-react',
        title: 'Desenvolvimento React',
        description:
          'Possuo conhecimentos em React, uma biblioteca JavaScript amplamente utilizada. Com o React, posso construir interfaces de usuário dinâmicas e sofisticadas, desenvolvendo componentes reutilizáveis e criando aplicações web de página única (SPA) de alto desempenho.',
      },
      {
        logo: 'musical-notes-outline',
        title: 'Produção musical',
        description:
          'Utilizo o FL Studio para criar músicas e produzir faixas musicais. Com a minha experiência em produção musical, combino diferentes elementos sonoros, como batidas, melodias e samples, para criar composições originais e envolventes. Através do uso de plugins e efeitos, aprimoro a qualidade e a sonoridade das minhas produções, buscando sempre alcançar o melhor resultado possível.',
      },
      {
        logo: 'game-controller-outline',
        title: 'Desenvolvimento de jogos',
        description:
          'Utilizo o Construct para criar jogos e desenvolver experiências interativas. Com o meu conhecimento em design de jogos e programação, crio mecânicas envolventes, níveis desafiadores e graficos focados em bits. Trabalho na criação de personagens, ambientes e efeitos sonoros, garantindo que cada elemento do jogo contribua para uma experiência divertida e imersiva para os jogadores.',
      },
    ],
    []
  );

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(null);

  const handleCardClick = (indexCard) => {
    setSelectedSkillIndex(indexCard);
    setShowAdditionalInfo(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseInfo = () => {
    setShowAdditionalInfo(false);
    setSelectedSkillIndex(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <SkillsContainer
      showBackgroundBlur={showBackgroundBlur}
      className={showAdditionalInfo ? 'blur' : ''}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Minhas Habilidades<span style={{ color: 'var(--special-color)' }}>:</span></Title>
        <Text>
          Clique em qualquer card para saber mais!
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <SkillsMenu>
          {skills.map((item, index) => (
            <Card
              key={index}
              index={index}
              logo={item.logo}
              title={item.title}
              onClick={handleCardClick}
            />
          ))}
          {showAdditionalInfo && selectedSkillIndex !== null && (
            <AddInfo
              setShowAdditionalInfo={setShowAdditionalInfo}
              skills={skills}
              selectedSkillIndex={selectedSkillIndex}
              onClose={handleCloseInfo}
            />
          )}
        </SkillsMenu>
      </motion.div>
    </SkillsContainer>
  );
}

export default Skills;
