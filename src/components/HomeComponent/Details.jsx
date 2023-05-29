import React, { useState } from 'react';
import { Button } from '../Global/Button';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { DetailsWrapper, Content } from './Details.styles'

function Details({ title, details, href }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [showSoundCloud, setShowSoundCloud] = useState(false);

  const toggleDetails = () => {
    setOpenDetails(!openDetails);
    if (title === 'Música') {
      setShowSoundCloud(!showSoundCloud);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <DetailsWrapper data-open-details={openDetails}>
        <Button onClick={toggleDetails}>
          <h2 title={`Mais detalhes de ${title}`}>
            {title}
            <motion.span
              className={`rotate ${openDetails ? 'open' : ''}`}
              animate={{ rotate: openDetails ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: 'var(--special-color)' }}
            >
              <AiOutlineArrowRight size={16} />
            </motion.span>
          </h2>
        </Button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: openDetails ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <Content open={openDetails}>
            {details}
            <br />
            {title !== 'Música' && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                Clicando Aqui
              </a>
            )}
          </Content>
          {title === 'Música' && showSoundCloud && (
            <iframe
              width="100%"
              height="166"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1451065567&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          )}
        </motion.div>
      </DetailsWrapper>
    </motion.div>
  );
}

export default Details;
