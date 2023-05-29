import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  border-radius: 0.313rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  background-color: var(--primary-color);
  border: 0.063rem solid var(--secondary-color);

  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    width: 95%;
    padding: 0.8rem;
  }
`;

export const FormContainer = styled(motion.form)`
  box-sizing: border-box;
`;

export const Contacts = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  .contact-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  ion-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
    color: var(--text-color);
  }

  p {
    color: var(--text-color);
    font-size: 1em;
    line-height: 1.4;
    margin: 0;
  }
`;