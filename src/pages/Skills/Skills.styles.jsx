import styled from 'styled-components';

export const SkillsContainer = styled.main`
  &.blur {
    &::before {
      content: "";
      position: fixed;
      inset: 0;
      backdrop-filter: blur(5px);
      z-index: 998;
    }
  }
`;

export const SkillsMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;