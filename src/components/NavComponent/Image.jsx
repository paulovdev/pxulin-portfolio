import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);
  border-radius: 2.435rem 2.435rem;
  color: var(--text-color);
  object-fit: cover;
`;

function ImageComponent() {
  return (
    <StyledImage src="/photo.jpg" alt="minha foto" width="50" height="40" />
  );
}

export default ImageComponent;
