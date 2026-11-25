import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

/* ============================
   Estilos do Card de Projeto
   ============================ */

const CardContainerStl = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(
    145deg,
    rgba(6, 2, 47, 0.95) 0%,
    rgba(15, 8, 70, 0.9) 50%,
    rgba(6, 2, 47, 0.95) 100%
  );
  border: 1px solid rgba(182, 234, 218, 0.15);
  cursor: pointer;
  will-change: transform;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: rgba(182, 234, 218, 0.4);
    box-shadow:
      0 8px 32px rgba(99, 193, 164, 0.15),
      0 0 20px rgba(182, 234, 218, 0.08);
  }
  ${({ $spotlight }) => $spotlight && css`
    @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        background: radial-gradient(
          circle 240px at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
          color-mix(in srgb, ${({ theme }) => theme.colors.accent} 28%, transparent),
          transparent 75%
        );
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      &:hover::before {
        opacity: 1;
      }
    }
  `}
`;

const CardActionStl = styled.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: inherit;
  background: transparent;
  cursor: inherit;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: -3px;
  }
`;

const CardImageStl = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(transparent, rgba(6, 2, 47, 0.95));
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${CardContainerStl}:hover & img {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #b6eada;
  margin: 0 0 6px 0;
  letter-spacing: 0.02em;
`;

const CardSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #a2caea;
  margin: 0;
  opacity: 0.85;
  letter-spacing: 0.01em;
`;

/* ============================
   Componente ProjectCard
   ============================ */

const ProjectCard = ({ path, nome, subtitulo, onClick, spotlight = false }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handlePointerMove = useCallback((event) => {
    if (event.pointerType !== 'mouse') return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (spotlight) {
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      return;
    }

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limita a rotação a ±6 graus para um efeito sutil
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;

    setTilt({ rotateX, rotateY });
  }, [spotlight]);

  /* Reseta o tilt quando o mouse sai do card */
  const handlePointerLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <CardContainerStl
      $spotlight={spotlight}
      onPointerMove={handlePointerMove}
      onPointerLeave={spotlight ? undefined : handlePointerLeave}
      style={spotlight ? undefined : {
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
      whileHover={spotlight ? undefined : { scale: 1.03 }}
      whileTap={spotlight ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Imagem do projeto */}
      <CardImageStl>
        <img src={path} alt={nome} loading="lazy" />
      </CardImageStl>

      {/* Conteúdo textual do card */}
      <CardContent>
        <CardTitle>{nome}</CardTitle>
        <CardSubtitle>{subtitulo}</CardSubtitle>
      </CardContent>
      {onClick && (
        <CardActionStl type="button" aria-label={`Ver detalhes de ${nome}`} onClick={onClick} />
      )}
    </CardContainerStl>
  );
};

ProjectCard.propTypes = {
  path: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  onClick: PropTypes.func,
  spotlight: PropTypes.bool,
};

export default ProjectCard;
