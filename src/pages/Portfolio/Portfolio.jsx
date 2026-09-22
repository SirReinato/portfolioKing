import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import projects from '../../data/projects.json';

/* ============================
   Estilos da Seção Portfólio
   ============================ */

const PortfolioSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: rgb(6, 2, 47);
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 2.5rem;
  color: #63c1a4;
  text-align: center;
  margin: 0 0 48px 0;
  letter-spacing: 0.04em;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 32px;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* ============================
   Variantes de animação
   ============================ */

/* Animação de entrada da seção inteira (AnimatedSection) */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

/* Animação do título */
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* Container do grid — orquestra o stagger dos filhos */
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

/* Cada card individual entra com fade + slide up */
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

/* ============================
   Componente Portfolio (Página)
   ============================ */

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Abre o modal com o projeto selecionado */
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /* Fecha o modal e limpa a seleção */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Pequeno delay para a animação de saída completar antes de limpar
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <PortfolioSection id="portfolio">
      {/* AnimatedSection — wrapper com animação de scroll */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Título da seção */}
        <SectionTitle variants={titleVariants}>Portfólio</SectionTitle>

        {/* Grid de cards com stagger animation */}
        <ProjectsGrid variants={gridVariants}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                path={project.path}
                nome={project.nome}
                subtitulo={project.subtitulo}
                descricao={project.descricao}
                url={project.url}
                onClick={() => handleCardClick(project)}
              />
            </motion.div>
          ))}
        </ProjectsGrid>
      </motion.div>

      {/* Modal do projeto selecionado */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </PortfolioSection>
  );
};

export default Portfolio;