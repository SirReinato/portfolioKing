import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';

// ─── Styled Components ────────────────────────────────────────────────────────

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts?.heading || "'Jacques Francois Shadow', cursive"};
  color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors?.text || '#A2CAEA'};
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
  }
`;

const AccentText = styled.span`
  color: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
  font-weight: bold;
`;

const SkillsBlock = styled.div``;

const SkillsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts?.heading || "'Jacques Francois Shadow', cursive"};
  color: ${({ theme }) => theme.colors?.textHighlight || '#63C1A4'};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const BadgeContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Badge = styled(motion.span)`
  background: ${({ theme }) => theme.colors?.cardBg || '#2F6A99'};
  color: ${({ theme }) => theme.colors?.text || '#A2CAEA'};
  padding: 10px 20px;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts?.body || "'Inter', sans-serif"};
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-block;
  cursor: default;
  border: 1px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.accent || '#B6EADA'};
  }
`;

// ─── Variantes de animação para stagger dos badges ────────────────────────────

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// ─── Lista de habilidades ─────────────────────────────────────────────────────

const skills = [
  'JavaScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Sass',
  'Figma',
  'Bootstrap',
  'Tailwind',
];

// ─── Componente About ─────────────────────────────────────────────────────────

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <AnimatedSection direction="up">
          <SectionTitle>Sobre mim</SectionTitle>
        </AnimatedSection>

        <ContentGrid>
          {/* Bloco de texto à esquerda */}
          <AnimatedSection direction="left" delay={0.1}>
            <TextBlock>
              <p>
                Olá, me chamo <AccentText>Renato</AccentText>, sou um{' '}
                <AccentText>Desenvolvedor Front-end</AccentText> apaixonado por
                criar interfaces modernas, acessíveis e com experiências
                incríveis para o usuário.
              </p>
              <p>
                Minha jornada no desenvolvimento web começou com a curiosidade de
                entender como os sites funcionam, e desde então venho me
                aprofundando em tecnologias como React, JavaScript e todo o
                ecossistema front-end.
              </p>
              <p>
                Busco sempre escrever código limpo, organizado e performático,
                seguindo as melhores práticas do mercado. Acredito que um bom
                design aliado a uma boa implementação técnica é o que transforma
                um projeto comum em algo extraordinário.
              </p>
              <p>
                Quando não estou codando, gosto de estudar novas tecnologias,
                contribuir com projetos open source e compartilhar conhecimento
                com a comunidade dev.
              </p>
            </TextBlock>
          </AnimatedSection>

          {/* Bloco de habilidades à direita */}
          <AnimatedSection direction="right" delay={0.2}>
            <SkillsBlock>
              <SkillsTitle>Habilidades</SkillsTitle>
              <BadgeContainer
                variants={badgeContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </Badge>
                ))}
              </BadgeContainer>
            </SkillsBlock>
          </AnimatedSection>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
