import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// ─── Animações CSS ────────────────────────────────────────────────────────────

const spinGradient = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseBadge = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
`;

// ─── Styled Components ────────────────────────────────────────────────────────

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 0 4rem;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1.5rem 2rem;
    gap: 2.5rem;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1.1;
  max-width: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    order: 1;
    max-width: 100%;
  }
`;

const StatusPill = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  background: rgba(99, 193, 164, 0.12);
  border: 1px solid rgba(99, 193, 164, 0.35);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.25rem;

  .pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
    animation: ${pulseBadge} 2s infinite ease-in-out;
  }
`;

const Greeting = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors?.text || '#A2CAEA'};
  margin-bottom: 0.4rem;
  letter-spacing: 0.05em;
`;

const Highlight = styled.h1`
  color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts?.heading || "'Jacques Francois Shadow', cursive"};
  font-size: 3.2rem;
  line-height: 1.15;
  display: block;
  margin-bottom: 1.25rem;
  text-shadow: 0 0 30px rgba(99, 193, 164, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    font-size: 1.9rem;
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors?.text || '#A2CAEA'};
  line-height: 1.8;
  margin-bottom: 2.2rem;
  max-width: 520px;

  strong {
    color: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    max-width: 100%;
    font-size: 0.95rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
  color: ${({ theme }) => theme.colors?.background || 'rgb(6, 2, 47)'};
  border: none;
  border-radius: 30px;
  padding: 13px 34px;
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 20px rgba(182, 234, 218, 0.35);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 28px rgba(182, 234, 218, 0.55);
  }
`;

const SecondaryButton = styled(motion.a)`
  background: rgba(182, 234, 218, 0.05);
  color: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
  border: 2px solid ${({ theme }) => theme.colors?.accent || '#B6EADA'};
  border-radius: 30px;
  padding: 11px 32px;
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(182, 234, 218, 0.15);
    border-color: #ffffff;
    color: #ffffff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors?.text || '#A2CAEA'};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(162, 202, 234, 0.2);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
    border-color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
    background: rgba(99, 193, 164, 0.15);
    box-shadow: 0 0 15px rgba(99, 193, 164, 0.3);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

// ─── Foto com Efeito Futurista & 3D Tilt ───────────────────────────────────────

const ImageContainer = styled(motion.div)`
  flex: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    order: 0;
    margin-bottom: 1rem;
  }
`;

const AvatarCard = styled(motion.div)`
  position: relative;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    width: 220px;
    height: 220px;
  }
`;

// Borda giratória com gradiente ciano e azul
const AnimatedBorder = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #63c1a4,
    #2f6a99,
    #b6eada,
    rgba(6, 2, 47, 0.2),
    #63c1a4
  );
  animation: ${spinGradient} 7s linear infinite;
  filter: blur(2px);
  z-index: 1;
`;

// Halo luminoso de fundo
const GlowAura = styled.div`
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(99, 193, 164, 0.35) 0%,
    rgba(47, 106, 153, 0.2) 60%,
    transparent 80%
  );
  filter: blur(20px);
  z-index: 0;
  pointer-events: none;
`;

const InnerMask = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #06022f;
  z-index: 2;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
`;

const ProfilePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.5s ease;

  ${AvatarCard}:hover & {
    transform: scale(1.05);
  }
`;

// Tech Badges flutuantes
const FloatingTechBadge = styled(motion.div)`
  position: absolute;
  bottom: 12px;
  right: -15px;
  background: rgba(6, 2, 47, 0.85);
  border: 1px solid rgba(99, 193, 164, 0.4);
  padding: 0.5rem 1rem;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  color: #b6eada;
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(99, 193, 164, 0.25);
  z-index: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    right: -5px;
    bottom: 5px;
    font-size: 0.75rem;
    padding: 0.35rem 0.8rem;
  }
`;

const FloatingExpBadge = styled(motion.div)`
  position: absolute;
  top: 15px;
  left: -20px;
  background: rgba(6, 2, 47, 0.85);
  border: 1px solid rgba(47, 106, 153, 0.5);
  padding: 0.5rem 0.9rem;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  color: #a2caea;
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints?.mobile || '480px'}) {
    left: -5px;
    top: 5px;
    font-size: 0.7rem;
    padding: 0.35rem 0.7rem;
  }
`;

// ─── Variantes de Animação Framer Motion ──────────────────────────────────────

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
};

// ─── Componente Principal Hero ────────────────────────────────────────────────

const Hero = () => {
  const cardRef = useRef(null);

  // Efeito interativo 3D Tilt com mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <HeroSection id="home">
      <Container>
        {/* Conteúdo textual */}
        <TextContent
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants}>
            <StatusPill
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="pulse-dot" />
              Disponível para novos projetos & contratos
            </StatusPill>
          </motion.div>

          <motion.div variants={childVariants}>
            <Greeting>Olá, me chamo Renato França</Greeting>
            <Highlight>Desenvolvedor Front-end</Highlight>
          </motion.div>

          <motion.div variants={childVariants}>
            <Description>
              Especializado em criar <strong>experiências digitais interativas, responsivas e de alta performance</strong>. Apaixonado por transformar ideias complexas em interfaces elegantes utilizando o ecossistema moderno de <strong>React, Next.js e JavaScript</strong>.
            </Description>
          </motion.div>

          <motion.div variants={childVariants}>
            <ButtonGroup>
              <PrimaryButton
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Explorar Projetos
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </PrimaryButton>
              <SecondaryButton
                href="/curriculo-renato-franca.pdf"
                download="curriculo-renato-franca.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download CV
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>

          <motion.div variants={childVariants}>
            <SocialLinks>
              {/* GitHub */}
              <SocialLink
                href="https://github.com/SirReinato"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label="Perfil do GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </SocialLink>

              {/* LinkedIn */}
              <SocialLink
                href="https://www.linkedin.com/in/renato-fran%C3%A7a-0014b3195/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label="Perfil do LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>

              {/* Email */}
              <SocialLink
                href="#contact"
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label="Ir para contato"
                title="Contato"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </TextContent>

        {/* Retrato Profissional com Efeitos Animados */}
        <ImageContainer
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge flutuante de Especialidade */}
          <FloatingExpBadge
            animate={{
              y: [-6, 6, -6],
              transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span>💻</span>
            <span>Frontend & UX</span>
          </FloatingExpBadge>

          {/* Avatar com 3D tilt ao passar o mouse */}
          <AvatarCard
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            {/* Halo Luminoso */}
            <GlowAura />

            {/* Borda giratória com gradiente */}
            <AnimatedBorder />

            {/* Imagem do Rosto */}
            <InnerMask>
              <ProfilePhoto
                src="/minhaCara.png"
                alt="Foto profissional de Renato França - Desenvolvedor Front-end"
                loading="eager"
              />
            </InnerMask>
          </AvatarCard>

          {/* Badge flutuante de Stack Principal */}
          <FloatingTechBadge
            animate={{
              y: [6, -6, 6],
              transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            }}
          >
            <span>⚛️</span>
            <span>React • Next.js</span>
          </FloatingTechBadge>
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
