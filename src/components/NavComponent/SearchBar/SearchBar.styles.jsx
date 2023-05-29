import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items:center;
`;

export const SearchInput = styled.input`
  position: absolute;
  width: 250px; 
  top:3rem;
  left:-200px;
  padding: 0.625rem 0.945rem;

  color: var(--text-color);
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);
  border-radius: 0.563rem;

  z-index: 998;
  `


