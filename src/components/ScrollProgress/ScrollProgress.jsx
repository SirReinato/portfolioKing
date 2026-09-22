import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';

// ─── Componente ScrollProgress ───────────────────────────────────────────────
// Barra horizontal fixa no topo da página que indica o progresso de scroll.
// Usa useScroll para rastrear a posição e useSpring para suavizar a animação.

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Suaviza o valor do scroll para evitar saltos bruscos
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <ProgressBar style={{ scaleX }} />;
};

export default ScrollProgress;

// ─── Styled Components ───────────────────────────────────────────────────────

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 1100;
  transform-origin: 0%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.textHighlight},
    ${(props) => props.theme.colors.accent}
  );
  will-change: transform;
`;
