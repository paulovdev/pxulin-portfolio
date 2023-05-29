import React from 'react';
import { StyledCard } from './Card.styles'

const Card = ({ index, logo, title, onClick }) => {
  const handleCardClick = () => {
    onClick(index);
  };

  return (
    <StyledCard
      key={index}
      onClick={handleCardClick}
      title={`Mais detalhes sobre ${title}`}>
      <ion-icon
        name={logo}>

      </ion-icon>
      <h1>{title}</h1>
    </StyledCard>
  );
};

export default Card;
