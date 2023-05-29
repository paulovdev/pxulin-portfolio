import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  h2 {
    font-size: 1.25rem;
    color: var(--text-color);
    margin-bottom: 0.625rem;
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
  }

  button {
    width: 100%;
  }

  a {
    text-decoration: underline;
    font-size: 1rem;
    color: var(--text-color);
    line-height: 1.5;
    &:hover{
    color:var(--special-color);
  }
  }

  .arrow {
    margin-left: 0.3125rem;
    transition: transform 0.3s ease-in-out;
  }

  .rotate {
    display: flex;
    margin-left: 0.435rem;
  }

`;

export const Content = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.5;

  text-align:center;

  overflow: hidden;
  
  display: ${({ open }) => (open ? 'block' : 'none')};

`;