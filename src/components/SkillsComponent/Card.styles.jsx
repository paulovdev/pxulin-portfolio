import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 0.313rem;
  box-shadow: 0 0.188rem 0.5rem rgba(0, 0, 0, 0.24);

  padding: 1em;
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ion-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: var(--text-color);

    &:hover {
      color: var(--special-color);
      transition: 0.3s;
    }
  }

  h1 {
    color: var(--text-color);
    font-size: 1.3em;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-color);
    font-size: 1em;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  transition: transform 0.2s ease-in-out;
  transform-origin: center;

  &:hover {
    transition:0.3s;
    transform: scale(1.05);
    border:1px solid var(--special-color);
    ion-icon, h1 {
      color: var(--special-color);
    }

  }
`;
