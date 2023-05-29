import React from 'react';
import { motion } from 'framer-motion';
import { Text, Title } from '../../components/Global/Texts';
import { TextContainer, SocialIcons, IconLink, IconMapping } from './Home.styles';
import Slide from '../../components/HomeComponent/Slide';
import Typewriter from 'typewriter-effect';

function Home() {
  const home = React.useMemo(() => [
    { platform: 'twitter', link: 'https://twitter.com/seu_twitter' },
    { platform: 'instagram', link: 'https://www.instagram.com/seu_instagram' },
    { platform: 'github', link: 'https://github.com/seu_github' },
    { platform: 'linkedin', link: 'https://www.linkedin.com/seu_linkedin' },
  ], []);

  return (
    <>
      <TextContainer className="typewriter">
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
          <Title>
            <Typewriter
              options={{
                strings: ['Desenvolvedor Frontend', 'Produtor Musical', '&', 'Desenvolvedor de Jogos'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </Title>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Text>
            Olá, eu sou o Paulo Vitor, atualmente trabalho como Desenvolvedor de Software Frontend. Também sou produtor musical e criador de jogos.
          </Text>
          <Text>
            Eu me especializo em construir aplicações web avançadas com foco em desempenho. Utilizo ferramentas como Visual Studio Code, PyCharm e outras para o desenvolvimento web.
          </Text>
          <Text>
            Para a produção musical, confio no FL Studio, e quando se trata de criação de jogos, utilizo o Construct.
          </Text>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <SocialIcons>
            {home.map((item, index) => {
              const IconComponent = IconMapping[item.platform];
              return (
                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
                  <IconLink
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.platform}
                    title={`Link para página do ${item.platform}`}
                  >
                    <IconComponent />
                  </IconLink>
                </motion.div>
              );
            })}
          </SocialIcons>
        </motion.div>
        <Slide />
      </TextContainer>
    </>
  );
}

export default Home;
