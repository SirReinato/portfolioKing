import { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* ============================
   Estilos do Card de Projeto
   ============================ */

const CardContainer = styled(motion.div)`
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
`;

const CardImage = styled.div`
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

  ${CardContainer}:hover & img {
    transform: scale(1.05);
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

const ProjectCard = ({ path, nome, subtitulo, descricao, url, onClick }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  /* Calcula o efeito 3D tilt baseado na posição do mouse */
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limita a rotação a ±6 graus para um efeito sutil
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 6;

    setTilt({ rotateX, rotateY });
  }, []);

  /* Reseta o tilt quando o mouse sai do card */
  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <CardContainer
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Imagem do projeto */}
      <CardImage>
        <img src={path} alt={nome} loading="lazy" />
      </CardImage>

      {/* Conteúdo textual do card */}
      <CardContent>
        <CardTitle>{nome}</CardTitle>
        <CardSubtitle>{subtitulo}</CardSubtitle>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
