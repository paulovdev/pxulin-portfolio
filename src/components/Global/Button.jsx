import styled from 'styled-components';

export const Button = styled.button`
    color: var(--text-color);
    background-color: transparent;
    border: none;

    cursor: pointer;
`;

export const ButtonContact = styled(Button)`
  font-size: 16px;
  width: 100%;

  background: var(--secondary-color);

  padding: 0.8rem;

  margin-bottom: 1rem;
  border-radius: 0.313rem;
`;

export const ButtonTheme = styled(Button)`
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  padding:0.625rem 0.945rem;
  border-radius: 1.563rem;

  display:flex;
  &:hover{
    color:var(--special-color);
    transition:0.3s;
  }
`;

export const ButtonCardInfo = styled(Button)`
    position: absolute;
    top: 0.625rem;
    left: 0.625rem;

    background-color: var(--primary-color);
    border: 0.063rem solid var(--secondary-color);
    
    padding: 0 0.625rem;
    border-radius: 1.563rem;

    display: flex;
`;

export const ButtonScrollTop = styled(Button)`
  background-color: var(--primary-color);

  padding:0.625rem 0.945rem;
  border-radius: 1.563rem;

  display:flex;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ButtonArrow = styled(Button)`
    background-color: var(--primary-color);
    border: 0.063rem solid var(--secondary-color);
    
    padding: 0.342rem 0.925rem;
    border-radius: 1.563rem;
    background-color: transparent;
    margin:1rem 0.5rem;

    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const ButtonSearch = styled(Button)`
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  padding:0.625rem 0.945rem;
  border-radius: 1.563rem;

  display:flex;
  &:hover{
    color:var(--special-color);
    transition:0.3s;
  }
`;

export const ButtonInput = styled.button`
  position:absolute;
  top:4rem;
  left:1rem;
  border: none;
  background: none;
  z-index: 999;
  transform: translateY(-50 %);
  :active {
  color: var(--special - color);
}
`;