import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

// Componente principal — single page com scroll, métricas e analytics da Vercel
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
};

export default App;
