import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { ButtonCardInfo } from '../Global/Button'
import { AdditionalInfo } from './AddInfo.styles'

function AddInfo({ setShowAdditionalInfo, skills, selectedSkillIndex }) {
  const handleCloseInfo = (event) => {
    event.stopPropagation();
    setShowAdditionalInfo(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <AdditionalInfo>
      <motion.p initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        {skills[selectedSkillIndex].description}
      </motion.p>
      <ButtonCardInfo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onClick={handleCloseInfo}
      >
        <BiArrowBack size={28} title='Fechar' />
      </ButtonCardInfo>
    </AdditionalInfo>
  );
}

export default AddInfo;
