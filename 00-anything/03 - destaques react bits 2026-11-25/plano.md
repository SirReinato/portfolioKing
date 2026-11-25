# Destaques React Bits no portfolioKing

## Etapa 1 — Implementar os dois destaques

- **Contexto e objetivo** — Dar destaque ao Peças Mozi na vitrine e à expressão Full-Stack no Hero, como aprovado na conversa do portfólio.
- **Arquivos previstos** — `src/components/ProjectCard/ProjectCard.jsx`, `src/pages/Portfolio/Portfolio.jsx`, `src/pages/Hero/Hero.jsx`, `AGENTS.md` e `README.md`.
- **Passos técnicos** — Consultar Spotlight Card e Shiny Text no MCP. Aplicar a luz menta que acompanha o ponteiro somente ao Peças Mozi e uma passagem de brilho em Full-Stack. Adaptar os dois efeitos para styled-components. Preservar o acionamento do modal e validar a ativação por teclado.
- **Dependências e restrições** — React, styled-components e Framer Motion já presentes. Manter os efeitos decorativos compatíveis com `prefers-reduced-motion`, preservar a leitura do título e a interação por toque.
- **Critérios de aceitação** — O brilho do título roda uma vez. Só Peças Mozi recebe o Spotlight. Clicar, tocar ou pressionar Enter abre o modal. Escape fecha o modal. Graphify, lint e build passam com Node.js 22.
- **Linear** — A busca por `portfolioKing` não encontrou projeto. Este arquivo é o bloco copiável da demanda.

## Etapa seguinte

Servir o build validado localmente para revisão visual.

## Resultado

O Playwright confirmou o Spotlight apenas em Peças Mozi, o brilho único em Full-Stack e o comportamento com movimento reduzido. O build servido localmente abriu o modal por clique, teclado e toque e fechou por Escape ou pelo botão. Graphify, lint e build passaram com Node.js 22.
