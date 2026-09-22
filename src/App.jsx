import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

// Componente principal — single page com scroll, sem react-router-dom
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
    </ThemeProvider>
  );
};

export default App;
