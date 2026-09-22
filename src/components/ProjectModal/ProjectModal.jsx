import { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================
   Estilos do Modal
   ============================ */

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  background: linear-gradient(
    160deg,
    rgba(6, 2, 47, 0.98) 0%,
    rgba(15, 10, 60, 0.95) 100%
  );
  border: 2px solid #b6eada;
  border-radius: 16px;
  z-index: 1001;

  /* Scrollbar customizada */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(182, 234, 218, 0.3);
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(6, 2, 47, 0.6);
  border: 1px solid rgba(182, 234, 218, 0.2);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  color: #a2caea;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s ease;

  &:hover {
    color: #b6eada;
    border-color: #b6eada;
    background: rgba(182, 234, 218, 0.1);
    transform: rotate(90deg);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 14px 14px 0 0;
  object-fit: cover;
  max-height: 300px;
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const ModalTitle = styled.h2`
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 1.6rem;
  color: #63c1a4;
  margin: 0 0 12px 0;
  letter-spacing: 0.02em;
`;

const ModalDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #a2caea;
  line-height: 1.6;
  margin: 0 0 24px 0;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 24px;
  background: #b6eada;
  color: rgb(6, 2, 47);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;

  &:hover {
    background: #63c1a4;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(99, 193, 164, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ============================
   Variantes de animação
   ============================ */

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

/* ============================
   Componente ProjectModal
   ============================ */

const ProjectModal = ({ isOpen, onClose, project }) => {
  /* Fecha o modal ao pressionar Escape */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  /* Registra/remove o listener de teclado */
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Previne scroll do body quando o modal está aberto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  /* Fecha ao clicar no overlay (não propaga clique do modal) */
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && project && (
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.25 }}
          onClick={handleOverlayClick}
        >
          <ModalContainer
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Botão de fechar */}
            <CloseButton onClick={onClose} aria-label="Fechar modal">
              ✕
            </CloseButton>

            {/* Imagem do projeto */}
            {project.path && (
              <ModalImage src={project.path} alt={project.nome} />
            )}

            <ModalBody>
              {/* Título do projeto */}
              <ModalTitle>{project.nome}</ModalTitle>

              {/* Descrição do projeto */}
              {project.descricao && (
                <ModalDescription>{project.descricao}</ModalDescription>
              )}

              {/* Se não houver descrição, exibe o subtítulo como fallback */}
              {!project.descricao && project.subtitulo && (
                <ModalDescription>
                  Projeto desenvolvido com {project.subtitulo}
                </ModalDescription>
              )}

              {/* Botões de ação */}
              <ButtonGroup>
                <ActionButton
                  href="https://github.com/SirReinato"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📂 Repositório
                </ActionButton>

                {project.url && (
                  <ActionButton
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Visitar
                  </ActionButton>
                )}
              </ButtonGroup>
            </ModalBody>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
