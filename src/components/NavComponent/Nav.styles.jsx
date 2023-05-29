import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled.header`
  position: fixed;
  z-index: 9999;
  
`;

export const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .hamburger {
    top:1px;
    padding: 0 0.645rem;
    border-radius: 1.563rem;
    color: var(--text-color);
    background-color: var(--primary-color);
    border: 0.063rem solid var(--secondary-color);
    display: none;
    z-index: 9999;
  }

  @media (max-width: 768px) {
    .hamburger {
      display: inline-flex;
    }

    ul {
      position: fixed;
      top: ${(props) => (props.isopen ? '80px' : '-999px')};
      flex-direction: column;
      align-items: start;
      padding: 1.563rem;
      height: 70%;
      width: 70%;
      transition: top 0.5s;
    }
  }
`;

export const Navigation = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 1.5em;
  padding: 0.625rem 1.445rem;
  border-radius: 1.563rem;
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  p {
    color: var(--text-color);
    text-decoration: none;
    transition: 0.3s;
    position: relative;
    margin:0;
  }
`;