# Currículo full-stack do portfolioKing

## Etapa 1 — Atualizar o PDF baixável e validar

- **Objetivo** — Alinhar o currículo que o Hero e o cabeçalho oferecem para download ao perfil de Desenvolvedor Full-Stack e aos três primeiros projetos da vitrine.
- **Arquivos** — `public/curriculo-renato-franca.pdf`, `public/cv-renato-franca.pdf`, `AGENTS.md` e `README.md`.
- **Passos técnicos** — Atualizar título, resumo, competências de desenvolvimento e fichas de Peças Mozi, N1 GuidePro e Guia Econômico. Sincronizar a cópia pública antiga e conferir a renderização e os links dos projetos.
- **Restrições e dependências** — Usar o currículo existente e o catálogo `src/data/projects.json` como fontes. Preservar dados de contato, cargos, datas, formação e certificações. As ferramentas de edição do PDF não são dependências do site.
- **Critérios de aceitação** — O PDF apresenta o perfil full-stack, os três projetos na ordem da vitrine e links coerentes com o catálogo. As duas URLs públicas servem a mesma versão. Graphify, lint e build passam com Node.js 22.
- **Linear** — A busca por `portfolioKing` não retornou um projeto. Este plano serve de registro copiável da demanda.

## Etapa seguinte

Revisar a branch com o currículo atualizado antes da integração à main.

## Resultado

As duas páginas foram revisadas após a renderização. O PDF tem texto selecionável, estrutura de acessibilidade e os dez links conferidos. Os 19 itens do histórico profissional foram preservados. As duas cópias públicas e os arquivos gerados em dist têm o mesmo SHA-256. Graphify, lint e build passaram com Node.js 22.
