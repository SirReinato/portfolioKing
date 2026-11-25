# Logo Loop e Star Border no portfolioKing

## Etapa 1 — Atualizar habilidades e link de contato

- **Contexto e objetivo** — Dar movimento à faixa de habilidades do Sobre e destacar o link de contato no rodapé com Star Border.
- **Arquivos previstos** — `src/pages/About/About.jsx`, `src/components/Footer/Footer.jsx`, `AGENTS.md` e `README.md`.
- **Passos técnicos** — Consultar Logo Loop e Star Border pelo MCP. Implementar a faixa contínua e seu controle de pausa. Usar `mailto:contato@francalabs.dev` e aplicar a borda animada ao link de e-mail.
- **Dependências e restrições** — React e styled-components já presentes. Reutilizar os ícones locais disponíveis, preservar as habilidades em texto e respeitar movimento reduzido. O destinatário é o endereço fornecido pelo usuário.
- **Critérios de aceitação** — A faixa repete sem duplicar itens para leitores de tela. O controle pausa e retoma com teclado e toque. Com movimento reduzido, as habilidades ficam estáticas e o link de contato mantém uma borda estática. Graphify, lint e build passam com Node.js 22.
- **Linear** — A busca por `portfolioKing` não encontrou projeto. Este arquivo é o bloco copiável da demanda.

## Etapa seguinte

Servir o build validado localmente para revisão visual.

## Resultado

O Playwright confirmou as dez habilidades, a pausa por mouse, teclado e toque, a borda animada exclusiva do link de contato e a versão estática com movimento reduzido. O endereço conferido no link foi contato@francalabs.dev. Graphify, lint e build passaram com Node.js 22.
