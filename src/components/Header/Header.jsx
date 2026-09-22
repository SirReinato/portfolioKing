import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Variantes de animação ───────────────────────────────────────────────────

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay: 0.1 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { x: '100%', transition: { duration: 0.25 } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i, type: 'spring', stiffness: 120, damping: 14 },
  }),
  exit: { opacity: 0, x: 30, transition: { duration: 0.15 } },
};

// ─── Links de navegação ──────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  {
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/1pdQ3nIZrfFeSjGTQSktXzA5_yCrdKZ2d/view?usp=sharing',
    external: true,
  },
];

// ─── Componente Header ───────────────────────────────────────────────────────

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta seção ativa via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.filter((l) => !l.external).map((l) => l.href.replace('#', ''));
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: '-30% 0px -60% 0px',
          threshold: 0,
        });
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <HeaderWrapper
      as={motion.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeaderInner>
        {/* Logo */}
        <Logo href="#home" onClick={handleLinkClick}>
          <span className="accent">R</span>F
        </Logo>

        {/* Navegação desktop */}
        <DesktopNav>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              $active={!link.external && activeSection === link.href.replace('#', '')}
            >
              {link.label}
              <Underline
                as={motion.span}
                layoutId="nav-underline"
                style={{
                  scaleX: !link.external && activeSection === link.href.replace('#', '') ? 1 : 0,
                }}
              />
            </NavLink>
          ))}
        </DesktopNav>

        {/* Botão hamburger — mobile */}
        <HamburgerButton
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
          $open={menuOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
      </HeaderInner>

      {/* Menu mobile — sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <Overlay
              as={motion.div}
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
            />
            <MobileSidebar
              as={motion.nav}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {NAV_LINKS.map((link, i) => (
                <MobileNavLink
                  as={motion.a}
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  $active={!link.external && activeSection === link.href.replace('#', '')}
                  onClick={handleLinkClick}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                >
                  {link.label}
                </MobileNavLink>
              ))}
            </MobileSidebar>
          </>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

export default Header;

// ─── Styled Components ───────────────────────────────────────────────────────

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(6, 2, 47, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.accent}33;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 72px;
`;

const Logo = styled.a`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  letter-spacing: 2px;
  user-select: none;

  .accent {
    color: ${(props) => props.theme.colors.textHighlight};
  }

  &:hover {
    opacity: 0.85;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Underline = styled.span`
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.textHighlight};
  border-radius: 1px;
  transform-origin: left;
  transition: transform 0.3s ease;
`;

const NavLink = styled.a`
  position: relative;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) =>
    props.$active ? props.theme.colors.textHighlight : props.theme.colors.text};
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }

  &:hover ${Underline} {
    transform: scaleX(1) !important;
  }
`;

// ─── Hamburger ───────────────────────────────────────────────────────────────

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1100;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${(props) => props.theme.colors.text};
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Animação X quando aberto */
  ${(props) =>
    props.$open &&
    `
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

// ─── Menu Mobile ─────────────────────────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1050;
`;

const MobileSidebar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  height: 100dvh;
  background: rgba(6, 2, 47, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 1060;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 2rem;
  gap: 1.5rem;
  border-left: 1px solid ${(props) => props.theme.colors.accent}44;
`;

const MobileNavLink = styled.a`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.15rem;
  font-weight: 500;
  color: ${(props) =>
    props.$active ? props.theme.colors.textHighlight : props.theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent}22;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }
`;
