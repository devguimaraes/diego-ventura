# GEMINI.md — Dr. Dhiego Ventura Landing Page

Este arquivo fornece o contexto instrucional e diretrizes para o desenvolvimento e manutenção da landing page do nutricionista Dr. Dhiego Ventura.

## Visão Geral do Projeto
Landing page de produção institucional single-page com tema **dark premium**.
- **Propósito:** Conversão de pacientes para atendimento VIP e institucionalização da marca.
- **Tecnologias:** Astro 6, Tailwind CSS 3, shadcn/ui v5 (React), Bun.
- **Design System:** Baseado em `DESIGN.md`. Cores: Navy Profundo (`#071325`), Dourado (`#C9A84C`), Verde Sage (`#2D6A4F`). Fonte: Manrope.

## Comandos Principais
| Comando | Descrição |
| :--- | :--- |
| `bun install` | Instalar dependências (obrigatório usar Bun). |
| `bun run dev` | Iniciar servidor de desenvolvimento (localhost:4321). |
| `bun run build` | Gerar build de produção na pasta `dist/`. |
| `bunx astro check` | Executar verificação de tipos e linting do Astro. |
| `npx shadcn@latest add <cmp>` | Adicionar novos componentes do shadcn/ui. |

## Convenções de Desenvolvimento

### Arquitetura e Estrutura
- **Single Source of Truth:** Todo conteúdo textual DEVE residir em `src/data/site.json`. Evite textos hardcoded nos componentes `.astro`.
- **Componentes:** Localizados em `src/components/`. As seções da página principal são divididas em componentes individuais.
- **Wrappers UI:** `src/components/ui/` contém componentes shadcn/ui. Padrão: um arquivo `.astro` atua como wrapper para o componente `.tsx` correspondente.
- **Hidratação:** EVITE o uso de diretivas `client:*` (como `client:load`) em componentes de UI como botões e cards, a menos que seja estritamente necessário para interatividade complexa. Isso evita problemas de IDs duplicados e overhead de JS.

### Estilo e Design
- **Tailwind:** Siga as classes utilitárias baseadas nos tokens definidos em `tailwind.config.ts`.
- **Ícones:** Utilize Material Symbols via Google Fonts. Sintaxe: `<span class="material-symbols-outlined">nome_do_icone</span>`.
- **Animações:** O projeto utiliza um sistema de animações baseado em scroll definido no `src/pages/index.astro`. Use atributos `data-animate` (ex: `data-animate="card"`) para aplicar efeitos.

### Regras de Ouro
1. **Bun Always:** Nunca utilize `npm` ou `yarn`. O arquivo `bun.lock` deve ser mantido íntegro.
2. **Design First:** Consulte sempre o `DESIGN.md` antes de alterar cores, espaçamentos ou tipografia.
3. **Formulários:** O processamento de envios é feito via FormSubmit. A URL de destino está em `site.json`.
4. **Imagens:** Devem ser colocadas em `public/images/`. Atente-se ao uso de `loading="eager"` apenas para elementos Above the Fold (como a imagem do Hero).

## Verificação e Qualidade
O projeto não possui suíte de testes automatizados tradicional. A validação consiste em:
1. **Build Limpo:** `bun run build` deve completar sem erros.
2. **Astro Check:** `bunx astro check` deve retornar 0 problemas.
3. **Acessibilidade:** Verifique contraste e semântica (tags `section`, `h1-h6`, `alt` em imagens).
