# 👑 Renato França | Portfólio v2.0

<div align="center">

![Versão](https://img.shields.io/badge/vers%C3%A3o-2.0.0-63C1A4?style=for-the-badge)
![Status](https://img.shields.io/badge/status-ativo%20%26%20modernizado-B6EADA?style=for-the-badge)
![Deploy](https://img.shields.io/badge/deploy-vercel-06022F?style=for-the-badge&logo=vercel)

<p align="center">
  <b>Portfólio moderno de Desenvolvedor Front-end, focado em interatividade, performance e design de alto padrão.</b>
</p>

[🌐 Acessar Portfólio Online](https://renato-franca.vercel.app/) • [💼 LinkedIn](https://www.linkedin.com/in/renato-fran%C3%A7a-0014b3195/) • [🐙 GitHub](https://github.com/SirReinato)

</div>

---

## 📖 Sobre o Projeto

O portfólio passou por uma **repaginação de 100% da arquitetura e da experiência de usuário (versão 2.0)**. O objetivo foi modernizar completamente o visual, eliminando gargalos de layout e padrões legados, mantendo a identidade visual única e a paleta de cores original (roxo profundo, azul elétrico, ciano e menta).

### ✨ Novidades da Versão 2.0:
- **Single Page Application Fluida:** Navegação suave entre seções via âncoras inteligentes e observer de rolagem.
- **Glassmorphism Header:** Cabeçalho fixo moderno com desfoque de fundo (*backdrop-filter*) e menu responsivo animado para mobile.
- **Barra de Progresso de Rolagem:** Indicador sutil e dinâmico de leitura no topo da página.
- **Avatar 3D Interativo:** Retrato profissional de estúdio tech com anel gradiente giratório (*conic-gradient*), halo luminoso volumétrico, *badges* flutuantes e efeito de inclinação 3D (*Tilt*) que responde ao movimento do cursor.
- **Seção Sobre & Habilidades:** Apresentação profissional com tags de habilidades animadas via *stagger children*.
- **Vitrine de Projetos Renovada:** Grid responsivo e fluído com cards modernos e modal nativo com animações de entrada/saída via `AnimatePresence`.
- **Performance de Alto Nível:** Zero dependências pesadas legadas (adeus Bootstrap, SCSS modules fragmentados, carrosséis pesados e modais externos).

---

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://react.dev/):** Biblioteca declarativa e reativa para interfaces modernas.
- **[Vite 5](https://vitejs.dev/):** Build tool ultrarrápida com Hot Module Replacement instantâneo.
- **[Styled Components](https://styled-components.com/):** CSS-in-JS com tema centralizado (`theme.js`), design tokens, tipografia e breakpoints padronizados.
- **[Framer Motion](https://www.framer.com/motion/):** Animações suaves de layout, gestos interativos (hover/tap), física de molas (*spring physics*) e transições de entrada no viewport (`whileInView`).

---

## 📂 Estrutura do Projeto

```text
src/
├── components/          # Componentes reutilizáveis
│   ├── AnimatedSection/ # Wrapper com revelação suave ao rolar
│   ├── Footer/          # Rodapé moderno com redes sociais e contato
│   ├── Header/          # Header com glassmorphism e menu mobile
│   ├── ProjectCard/     # Card de projeto com efeito 3D e hover
│   ├── ProjectModal/    # Modal animado com detalhes e links
│   └── ScrollProgress/  # Barra indicadora de scroll no topo
├── data/
│   └── projects.json    # Dados centralizados dos projetos do portfólio
├── pages/               # Seções principais da aplicação
│   ├── About/           # Seção Sobre mim e Habilidades técnicas
│   ├── Hero/            # Apresentação de destaque e Avatar 3D
│   └── Portfolio/       # Grid e visualização dos projetos
├── styles/
│   ├── GlobalStyles.js  # Reset CSS moderno e estilizações globais
│   └── theme.js         # Paleta de cores, tipografia, breakpoints e sombras
├── App.jsx              # Montagem central da aplicação
└── main.jsx             # Ponto de entrada do React
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SirReinato/portfolioKing.git
   cd portfolioKing
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no seu navegador:**
   ```text
   http://localhost:5173
   ```

5. **Para gerar o build de produção:**
   ```bash
   npm run build
   ```

---

## 📬 Contato

- **Desenvolvedor:** Renato França
- **GitHub:** [@SirReinato](https://github.com/SirReinato)
- **LinkedIn:** [Renato França](https://www.linkedin.com/in/renato-fran%C3%A7a-0014b3195/)

---

<p align="center">Desenvolvido com 💙 e React por Renato França</p>
