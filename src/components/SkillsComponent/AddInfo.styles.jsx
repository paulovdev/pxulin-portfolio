import styled from 'styled-components';

export const AdditionalInfo = styled.aside`
  position: fixed;
  max-width: 80vw;
  width: 50%;
  height: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding:3rem 1rem;
  color: var(--text-color);
  background-color: var(--primary-color);
  border: 0.163rem solid var(--secondary-color);
  border-radius: 5px;
  color: white;

  cursor: pointer;
  z-index: 999;

  p {
    color: var(--text-color);
    font-size: 1.4em;
    line-height: 1.4;
    cursor: text;
  }


  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    top: 50%;
  }

  @media (max-width: 480px) {
    top: 60%;
    transform: translate(-50%, -60%);
    overflow-y:scroll;
  }
`;
