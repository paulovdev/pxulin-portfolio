import { motion } from 'framer-motion';
import { Text, Title } from '../../components/Global/Texts'
import { Container, Section, Line } from './Setup.styles'

function Setup() {
  return (
    <Container>
      <Section>
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <Title>Configuração do PC<span style={{ color: 'var(--special-color)' }}>:</span></Title>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Text>
            <strong>Processador:</strong> INTEL CORE I3-12100F, 3.3GHZ, 4-CORE, 8-THREADS
          </Text>
          <Text>
            <strong>Memória RAM:</strong> TEAM GROUP T-FORCE VULCAN PICHAU, (2X8GB)
          </Text>
          <Text>
            <strong>Placa de Vídeo:</strong> RX 6600 CLD 8G ASRock AMD Radeon
          </Text>
          <Text>
            <strong>Placa-Mãe:</strong> ASUS PRIME H610M-E D4 LGA 1700
          </Text>
          <Text>
            <strong>Armazenamento:</strong> SSD 480GB XRAYDISK
          </Text>
          <Line />
        </motion.div>
      </Section>

      <Section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}>
          <Title>Periféricos<span style={{ color: 'var(--special-color)' }}>:</span></Title>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
          <Text>
            <strong>Mouse:</strong> LOGITECH G403 HERO
          </Text>
          <Text>
            <strong>Teclado:</strong> REDRAGON KNIGHT K598 RGB
          </Text>
          <Text>
            <strong>Monitor:</strong> AOC 21.5" LED Full HD
          </Text>
          <Text>
            <strong>Gabinete:</strong> PICHAU HX300 Glass
          </Text>
          <Text>
            <strong>Headset:</strong> HAVIT, 50mm
          </Text>
          <Line />
        </motion.div>
      </Section>
    </Container>
  );
}

export default Setup;
