# AGENTS.md — portfolioKing

Guia para trabalhar no portfólio profissional de Renato França. O projeto é uma página única estática em JavaScript/JSX (ES modules), com React 18, Vite 5, styled-components 6 e Framer Motion 11. O deploy usa Vercel, com Web Analytics e Speed Insights montados em `src/App.jsx`.

## Regras obrigatórias

### 1. Atualize este guia junto com mudanças estruturais

- Ao criar, mover, renomear, alterar ou remover seções, componentes, hooks, estilos estruturais, dados, assets ou testes, atualize neste guia as partes afetadas na mesma tarefa e no mesmo commit da mudança. A regra também vale para mudanças em dependências, scripts, configuração, integrações, arquitetura, segurança ou deploy.
- Registre a data e um resumo no [Histórico de alterações](#histórico-de-alterações). Atualize o `README.md` quando a mudança afetar o uso do portfólio ou a configuração do projeto. Se houver mudança de variáveis de ambiente, documente os nomes e valores de exemplo em `.env.example`.

### 2. Use branch dedicada, Conventional Commits e push

- Trabalhe em uma branch dedicada e mantenha a `main` reservada à integração. Use `feature/<nome>` para funcionalidades, `fix/<nome>` para correções, `refactor/<nome>` para refatorações e `docs/<nome>` para documentação.
- Faça commits pequenos e atômicos no padrão Conventional Commits. Exemplos incluem `fix(navegacao): corrigir ancora Sobre` e `docs: atualizar regras do portfolio`.
- Ao concluir e validar a tarefa, envie a branch ao GitHub com `git push -u origin <branch>`. A exceção do modelo para o primeiro commit em `main` vale para a criação de um repositório do zero. O portfolioKing já tem histórico.

### 3. Decomponha as demandas e acompanhe no Linear

- Organize novas funcionalidades, correções e refatorações em etapas verificáveis. Para cada etapa, registre título, objetivo, arquivos e passos técnicos, dependências e critérios de aceitação. Uma correção pequena pode ter uma única etapa.
- Com o Linear MCP ativo e o projeto ou time identificado, registre automaticamente as issues correspondentes e use labels, prioridade e estimativa do time. Inclua no planejamento um bloco copiável com o contexto, as restrições, a etapa atual e as seguintes. Use esse bloco como registro da demanda se o Linear estiver indisponível.
- Atualize as issues e o roteiro assim que mudarem os requisitos, as decisões técnicas ou os bloqueios.

### 4. Guarde os artefatos de trabalho em `00-anything/`

- Mantenha rascunhos, planos, especificações exploratórias, relatórios EGM, relatórios de auditoria, testes avulsos e saídas de validação em `00-anything/{sequencial_2_digitos} - {nome-da-implementacao} {yyyy-mm-dd}/`.
- Ao iniciar um planejamento, sessão de EGM, refatoração estrutural ou rodada de testes com artefatos, consulte as pastas existentes e use o próximo número da sequência. Exemplo `00-anything/01 - navegacao sobre 2026-11-25/`.
- Reserve a raiz para os arquivos permanentes do projeto, como `AGENTS.md`, `README.md`, `index.html`, os manifests npm e as configurações. Mantenha o código e os ativos do produto em seus diretórios próprios.

### 5. Implemente a partir de requisitos explícitos

- Use os requisitos da tarefa e o comportamento documentado para decidir o que entra no portfólio. Confirme com o usuário novos conteúdos profissionais, projetos, integrações e regras de negócio que dependam de informação ainda não fornecida.
- Se este guia for usado para iniciar outro projeto do zero, monte apenas a estrutura técnica genérica, com conteúdo neutro, layout básico e estilos do projeto no lugar do CSS inicial do Vite. Aguarde os requisitos antes de criar telas temáticas ou dados fictícios.

### 6. Mantenha o Graphify sincronizado com este guia

- Use a CLI oficial `graphify`, distribuída no PyPI como `graphifyy`. Em um ambiente novo, instale a versão testada com `uv tool install graphifyy==0.9.96` e confirme com `graphify --version`.
- Em cada alteração estrutural, execute `npm run graphify` na raiz no mesmo ciclo em que atualizar este guia. O script roda `graphify extract . --code-only` e `graphify cluster-only . --no-label` para analisar código localmente, sem serviços de IA, e gerar o mapa interativo.
- Consulte `graphify-out/graph.html` para navegar pelo mapa, `graphify-out/GRAPH_REPORT.md` para ver o resumo e `graphify-out/graph.json` para consultas pela CLI. Mantenha `graphify-out/` fora do Git.
- O primeiro mapa, gerado em 25/11/2026 a partir do workspace local, tem **161 nós, 294 arestas e 10 comunidades**. A varredura encontrou 17 arquivos de código. Use `graphify query "Portfolio ProjectModal"` para localizar os componentes da vitrine e suas relações.

## Ambiente e comandos

Use Node.js 22, conforme `.nvmrc`. O mínimo declarado no `package.json` é Node.js 20, embora o README ainda mencione 18. Use npm e mantenha o `package-lock.json` sincronizado quando alterar dependências.

| Comando | Uso |
| --- | --- |
| `npm ci` | Instalar as dependências a partir do lockfile. |
| `npm run dev` | Iniciar o servidor de desenvolvimento do Vite. |
| `npm run lint` | Rodar o ESLint com tolerância zero a avisos. |
| `npm run build` | Gerar a versão de produção em `dist/`. |
| `npm run preview` | Servir localmente a versão gerada pelo build. |
| `npm run graphify` | Gerar o relatório, os dados e o mapa interativo de código em `graphify-out/`. |

## Arquitetura

| Local | Responsabilidade |
| --- | --- |
| `index.html` e `src/main.jsx` | Metadados da página e montagem do React. |
| `src/App.jsx` | `ThemeProvider`, estilos globais, estrutura da página e métricas da Vercel. |
| `src/pages/` | `Hero` (`#home`) e `About` (`#about`) apresentam o perfil full-stack. `Portfolio` (`#portfolio`) mostra os projetos em destaque. |
| `src/components/` | Cabeçalho, menu responsivo, progresso de rolagem, cards, modal de projeto, animação de entrada e rodapé (`#contact`). |
| `src/styles/theme.js` e `src/styles/GlobalStyles.js` | Tokens de design, breakpoints e estilos globais. |
| `src/data/projects.json` | Catálogo local que alimenta a vitrine. |
| `public/` | Arquivos servidos a partir da raiz do site, incluindo capas, avatar e currículo. |
| `.codex/config.toml` e `components.json` | MCP shadcn do projeto e catálogo `@react-bits` para consulta de componentes. |

- A navegação usa âncoras nativas e o `IntersectionObserver` do `Header` para marcar a seção ativa. Ao editar a navegação, confira os `href` e os `id` juntos. Mantenha o link Sobre apontando para `#about` nos menus desktop e mobile.
- `Portfolio.jsx` mantém o projeto selecionado e controla a abertura do `ProjectModal`. Em mudanças nesse fluxo, preserve o fechamento por botão, clique no fundo e Escape, a animação de saída e a liberação da rolagem.
- O Spotlight do `ProjectCard` fica reservado a Peças Mozi (ID `2`). Os cards abrem os detalhes por clique, toque e teclado. Preserve o foco visível no controle do card.
- A aplicação não tem roteador, backend, banco, autenticação nem variáveis de ambiente próprias. Qualquer valor com prefixo `VITE_` fica exposto no cliente. Mantenha credenciais e tokens privados fora do frontend.

## Conteúdo, componentes e estilos

- Para incluir ou atualizar um projeto, edite `src/data/projects.json`. Mantenha um `id` numérico único e estável e siga os campos `nome`, `subtitulo`, `descricao`, `path`, `url` e `repo`. A ordem do JSON é a ordem da vitrine.
- Coloque as capas em `public/portfolio/` e use `path` no formato `/portfolio/arquivo.png`, com a capitalização exata do arquivo. Confira a capa e os destinos dos links no card e no modal. O currículo apontado pelo cabeçalho e pelo Hero é `public/curriculo-renato-franca.pdf`. Mantenha a cópia pública `public/cv-renato-franca.pdf` idêntica e alinhe os destaques do PDF à ordem de `src/data/projects.json`.
- Siga a organização em PascalCase com arquivo de mesmo nome, como `ProjectCard/ProjectCard.jsx`. Mantenha o conteúdo visível ao visitante em português do Brasil e preserve a identidade visual do portfólio.
- Use styled-components no próprio componente ou em um `styles.js` adjacente. Aplique o sufixo `Stl` a novos styled-components e aos que forem editados, como `CardTitleStl`. Reutilize os tokens de `theme.js`, centralize estilos globais em `GlobalStyles.js` e use props transitórias com `$` para valores exclusivos de estilo. Mantenha `src/` livre de novos arquivos ou imports de CSS e SCSS. `Portfolio.module.scss` é um arquivo legado sem importação no código atual.
- Consulte o React Bits via MCP shadcn quando precisar avaliar um componente. Antes de incorporá-lo, verifique as dependências e adapte os estilos para styled-components conforme as convenções acima.
- Declare as props dos componentes com `prop-types` de acordo com o contrato de cada componente.
- Use Framer Motion para as interações animadas e reaproveite `AnimatedSection` para revelações ao rolar. Ao editar interações, verifique o uso por teclado, o foco visível e o comportamento com preferência por movimento reduzido.
- O Shiny Text do Hero faz uma passagem de brilho em Full-Stack. Esse efeito e o Spotlight são adaptados do React Bits para styled-components e respeitam `prefers-reduced-motion`.
- O Logo Loop de Habilidades usa as marcas locais disponíveis em `public/habilidades/` e mantém todas as tecnologias em texto. Preserve o controle de pausa, a lista estática com movimento reduzido e a cópia decorativa fora da árvore de acessibilidade.
- O Star Border destaca o link `mailto:contato@francalabs.dev` no rodapé. Preserve o destinatário, o foco visível e a borda estática com movimento reduzido.

## Validação e entrega

- Em mudanças de código, execute `npm run lint` e `npm run build`. Em 25/11/2026, o lint passou com zero erros e avisos e o build de produção foi gerado em `dist/`. A navegação para `#about` foi verificada em desktop e mobile.
- Valide em desktop e mobile os fluxos de interface afetados. Use Playwright para validar mudanças críticas na navegação, no menu, nos cards, no modal e nos links do portfólio. Reaproveite o Chromium instalado pelo Playwright, respeite `PLAYWRIGHT_BROWSERS_PATH` quando existir e use caminhos portáveis. O repositório ainda não tem suíte Playwright configurada.
- Rode `npm audit` ao alterar dependências e faça análise estática direcionada ao adicionar formulários, integrações ou configuração sensível. Use HTTPS para integrações externas, valide entradas e URLs e sanitize HTML quando precisar renderizá-lo diretamente.
- Revise o diff e mantenha `dist/`, `node_modules/` e arquivos temporários fora dos commits. Antes de encerrar, confira a branch e o push, as issues ou o bloco copiável, os resultados de validação e a atualização do guia e do Graphify quando aplicável.
- Mantenha o `AGENTS.md` como fonte única de regras de agentes. Use `CLAUDE.md`, `GEMINI.md` e `.github/copilot-instructions.md` como ponteiros para ele quando preparar o repositório para essas ferramentas.

## Histórico de alterações

| Data | Alteração |
| --- | --- |
| 2026-11-25 | Criação do guia do portfolioKing e registro da correção da âncora Sobre e da validação de lint e build. |
| 2026-11-25 | Inclusão das seis regras obrigatórias do modelo, das convenções de estilo e das regras de validação e entrega. |
| 2026-11-25 | Configuração de `npm run graphify` e geração do primeiro mapa local, com 161 nós, 294 arestas e 10 comunidades. |
| 2026-11-25 | Atualização da apresentação, dos metadados e da vitrine para refletir o perfil full-stack, com Peças Mozi em primeiro destaque. |
| 2026-11-25 | Configuração do MCP shadcn no Codex do projeto e do catálogo `@react-bits` para consulta. |
| 2026-11-25 | Spotlight Card em Peças Mozi e Shiny Text em Full-Stack, com foco visível nos cards e suporte a movimento reduzido nos dois efeitos. |
| 2026-11-25 | Logo Loop nas habilidades com controle de pausa e Star Border no link de contato `contato@francalabs.dev`. |
| 2026-11-25 | Atualização do currículo baixável para o perfil full-stack, com Peças Mozi, N1 GuidePro e Guia Econômico na ordem da vitrine. |
