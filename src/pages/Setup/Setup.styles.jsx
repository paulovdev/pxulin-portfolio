import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  @media(max-width:992px) {
    flex-direction:column;
  }
`;

export const Section = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid var(--special-color);
  margin: 0;
`;
