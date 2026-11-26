# Download direto do currículo pelo cabeçalho

## Etapa 1 — Alinhar os links do cabeçalho ao Hero

- **Contexto e objetivo** — O Hero baixa o currículo Full-Stack diretamente. No cabeçalho, o mesmo PDF abre em outra aba. Alinhar o comportamento nos menus desktop e mobile.
- **Arquivos** — `src/components/Header/Header.jsx`, `AGENTS.md` e `README.md`.
- **Passos técnicos** — Configurar o nome de download no item do currículo e repassar o atributo às duas versões do link. Preservar o fechamento do menu mobile.
- **Dependências e restrições** — Usar o atributo HTML `download` e o PDF já servido pelo projeto. Preservar o comportamento das demais âncoras.
- **Critérios de aceitação** — O clique e o toque no cabeçalho geram um download do mesmo PDF do Hero. O menu mobile fecha. Graphify, lint e build passam com Node.js 22.
- **Linear** — A busca por `portfolioKing` não retornou um projeto. Este plano serve de registro copiável da demanda.

## Etapa seguinte

Revisar a branch antes de integrá-la à main.

## Resultado

O Playwright confirmou o download em desktop e mobile sem navegar para o PDF. O SHA-256 dos dois downloads é idêntico ao do currículo Full-Stack. O menu mobile fechou e as âncoras comuns permaneceram sem atributo de download. Graphify, lint e build passaram com Node.js 22.
