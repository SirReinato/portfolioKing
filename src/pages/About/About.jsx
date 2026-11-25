import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
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

const ContentGridStl = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 3rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints?.tablet || '768px'}) {
    grid-template-columns: minmax(0, 1fr);
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

const SkillsHeaderStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const SkillsTitleStl = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.textHighlight};
  font-size: 1.5rem;
  margin: 0;
`;

const LoopControlStl = styled.button`
  padding: 0.35rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const logoScroll = keyframes`
  to { transform: translateX(-50%); }
`;

const LogoTrackStl = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    display: flex;
    width: max-content;
    animation: ${logoScroll} 30s linear infinite;
    animation-play-state: ${({ $paused }) => ($paused ? 'paused' : 'running')};
  }
`;

const LogoViewportStl = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover ${LogoTrackStl} {
      animation-play-state: paused;
    }
  }
`;

const LogoListStl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: none;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (prefers-reduced-motion: no-preference) {
    flex-wrap: nowrap;
    padding-inline-end: 0.65rem;
  }

  @media (prefers-reduced-motion: reduce) {
    &[aria-hidden='true'] {
      display: none;
    }
  }
`;

const SkillBadgeStl = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.cardBgDark};
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;

  img {
    width: 1.15rem;
    height: 1.15rem;
    object-fit: contain;
  }
`;

// ─── Lista de habilidades ─────────────────────────────────────────────────────

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'APIs',
  'Supabase',
  'Firebase',
  'Webhooks',
  'Automação com IA',
];

const skillIcons = {
  JavaScript: '/habilidades/JavaScript.png',
  React: '/habilidades/React.js.png',
  'Next.js': '/habilidades/Next.js.png',
  'Node.js': '/habilidades/Node.js.png',
};

// ─── Componente About ─────────────────────────────────────────────────────────

const About = () => {
  const [isLoopPaused, setIsLoopPaused] = useState(false);

  return (
    <AboutSection id="about">
      <Container>
        <AnimatedSection direction="up">
          <SectionTitle>Sobre mim</SectionTitle>
        </AnimatedSection>

        <ContentGridStl>
          {/* Bloco de texto à esquerda */}
          <AnimatedSection direction="left" delay={0.1}>
            <TextBlock>
              <p>
                Sou <AccentText>desenvolvedor full-stack</AccentText>, com forte
                experiência em front-end. Construo aplicações que integram a
                interface, as regras de negócio e os dados.
              </p>
              <p>
                No <AccentText>Peças Mozi</AccentText>, desenvolvi um fluxo que
                vai da triagem de documentos à exportação para Word, passando por
                cálculos, geração assistida por IA e revisão humana.
              </p>
              <p>
                No <AccentText>N1 GuidePro</AccentText>, integrei busca, APIs e
                Supabase para organizar documentação de suporte. No{' '}
                <AccentText>Guia Econômico</AccentText>, conectei um painel
                financeiro a autenticação, armazenamento de dados e registro de
                despesas via webhook.
              </p>
            </TextBlock>
          </AnimatedSection>

          {/* Bloco de habilidades à direita */}
          <div>
            <SkillsHeaderStl>
              <SkillsTitleStl>Habilidades</SkillsTitleStl>
              <LoopControlStl
                type="button"
                aria-controls="skills-loop"
                aria-label={isLoopPaused ? 'Retomar animação das habilidades' : 'Pausar animação das habilidades'}
                onClick={() => setIsLoopPaused((paused) => !paused)}
              >
                {isLoopPaused ? 'Retomar' : 'Pausar'}
              </LoopControlStl>
            </SkillsHeaderStl>
            <LogoViewportStl id="skills-loop">
              <LogoTrackStl $paused={isLoopPaused}>
                {['skills', 'visual-copy'].map((group) => (
                  <LogoListStl key={group} role="list" aria-hidden={group === 'visual-copy' || undefined}>
                    {skills.map((skill) => (
                      <SkillBadgeStl key={skill}>
                        {skillIcons[skill] && <img src={skillIcons[skill]} alt="" />}
                        {skill}
                      </SkillBadgeStl>
                    ))}
                  </LogoListStl>
                ))}
              </LogoTrackStl>
            </LogoViewportStl>
          </div>
        </ContentGridStl>
      </Container>
    </AboutSection>
  );
};

export default About;
