# Atualização do perfil profissional do portfolioKing

**Contexto** — A conversa Cloudflare descreve a atuação de Renato França como full-stack, com forte experiência em front-end. O título e os textos anteriores apresentavam apenas a atuação em front-end.

**Restrições** — Usar os projetos já presentes no catálogo e as informações da conversa de referência. Preservar a identidade visual, as âncoras, os IDs, as capas e os links dos projetos. A revisão do currículo em PDF é uma etapa separada.

## Etapa concluída — Atualizar a apresentação e a vitrine

- **Objetivo** — Apresentar Renato como desenvolvedor full-stack e mostrar, com exemplos, como ele integra interfaces, APIs, dados e automação.
- **Arquivos** — `src/pages/Hero/Hero.jsx`, `src/pages/About/About.jsx`, `index.html`, `src/data/projects.json`, `README.md` e `AGENTS.md`.
- **Passos técnicos** — Alinhar apresentação, Sobre, metadados e README. Destacar Peças Mozi em primeiro lugar, seguido por N1 GuidePro e Guia Econômico. Atualizar as descrições com as contribuições discutidas na conversa Cloudflare.
- **Dependências** — Catálogo existente e informações da conversa Cloudflare. Nenhuma nova dependência npm.
- **Critérios de aceitação** — Exibir o título full-stack em desktop e mobile, manter a navegação Sobre e o modal funcionais, conferir a ordem da vitrine e executar lint, build e Graphify.
- **Resultado** — Critérios validados no commit `69a6f94`. A busca no Linear por `portfolioKing` não retornou um projeto. Este registro é o bloco copiável da demanda.

## Etapas seguintes

- **Integração** — A branch `fix/perfil-full-stack` está no GitHub para revisão e posterior integração à `main`.
- **Currículo** — O PDF baixável ainda usa o título Front-End. A decisão sobre atualizar o currículo completo fica em uma etapa dedicada.
