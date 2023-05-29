import React from 'react';
import { FooterContainer, FooterText } from './Footer.styles';
import { ButtonScrollTop } from '../Global/Button'
import { AiOutlineArrowUp } from 'react-icons/ai';


function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterContainer>
      <FooterText>© Paulo Vitor. Todos os direitos reservados.</FooterText>
      <ButtonScrollTop
        onClick={handleScrollTop}
        title="Voltar ao topo da página"
        aria-label="Voltar ao topo da página"
      >
        <AiOutlineArrowUp size={18} />
      </ButtonScrollTop>
    </FooterContainer>
  );
};

export default Footer;