import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SocialIcons = styled.aside`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

export const IconLink = styled.a`
  color: var(--button-text-color);
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--special-color);
    transition: 0.2s;
  }
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export const IconMapping = {
  twitter: FaTwitter,
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
};

