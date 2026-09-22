// Tema principal do portfólio — paleta de cores, tipografia, breakpoints e tokens de design

const theme = {
  // Paleta de cores
  colors: {
    background: 'rgb(6, 2, 47)',
    backgroundGradient:
      'linear-gradient(140deg, rgba(6, 2, 47, 1) 0%, rgba(15, 10, 60, 1) 50%, rgba(6, 2, 47, 1) 100%)',
    text: '#A2CAEA',
    textHighlight: '#63C1A4',
    accent: '#B6EADA',
    cardBg: '#2F6A99',
    cardBgDark: 'rgba(6, 2, 47, 0.9)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    glassBg: 'rgba(6, 2, 47, 0.6)',
    glassBorder: 'rgba(182, 234, 218, 0.15)',
  },

  // Tipografia
  fonts: {
    heading: '"Jacques Francois Shadow", serif',
    body: '"Inter", sans-serif',
  },

  // Breakpoints em pixels
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
  },

  // Transições CSS e variantes Framer Motion
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
    spring: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },

  // Raios de borda
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '30px',
  },

  // Sombras
  shadows: {
    card: '0 4px 30px rgba(0, 0, 0, 0.3)',
    glow: '0 0 20px rgba(99, 193, 164, 0.3)',
    elevate: '0 20px 60px rgba(0, 0, 0, 0.4)',
  },
};

// Helper para media queries — uso: ${media.tablet} { ... }
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  laptop: `@media (max-width: ${theme.breakpoints.laptop})`,
  desktop: `@media (max-width: ${theme.breakpoints.desktop})`,
};

export default theme;
