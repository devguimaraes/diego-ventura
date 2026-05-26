# Dr. Dhiego Ventura — Landing Page

Landing page de produção do nutricionista Dr. Dhiego Ventura. Site institucional single-page com tema dark premium, construído com Astro + Tailwind + shadcn/ui.

## Início rápido

```bash
bun install        # Bun é o package manager
bun run dev        # http://localhost:4321
bun run build      # produção → dist/
```

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Astro 6 |
| CSS | Tailwind CSS 3 (tokens customizados) |
| UI | shadcn/ui v5 + React |
| Runtime | Bun |
| Ícones | Material Symbols (Google Fonts) |
| Formulário | FormSubmit |
| Fonte | Manrope |

## Estrutura

```
src/
├── pages/index.astro             # única página
├── layouts/BaseLayout.astro      # shell HTML + SEO + schema.org
├── components/
│   ├── Header.astro              # navbar fixa
│   ├── Hero.astro                # oferta VIP com preço e CTA
│   ├── Servicos.astro            # serviços + vídeo institucional
│   ├── Sobre.astro               # bio + CRN
│   ├── Vantagens.astro           # 4 cards
│   ├── Especialidades.astro      # split layouts (estética + diabetes)
│   ├── Depoimentos.astro         # 4 testemunhos
│   ├── Planos.astro              # 3 planos com destaque VIP
│   ├── Contato.astro             # formulário + endereço
│   ├── Clinica.astro             # galeria + localização
│   ├── Footer.astro              # links e contato
│   ├── WhatsAppFAB.astro         # botão flutuante
│   └── ui/                       # wrappers Astro → shadcn (React)
├── data/site.json                # conteúdo centralizado
└── styles/global.css             # Tailwind + utilities
```

## Design System

Fonte da verdade: `DESIGN.md`. Tokens de cor, tipografia e espaçamento replicados em `tailwind.config.ts`.

- **Tema:** dark premium (Navy `#071325`, Gold `#C9A84C`, Sage `#2D6A4F`)
- **Fonte:** Manrope (headings + body)
- **Ícones:** Material Symbols Outline

## Comandos

| Comando | Ação |
|---------|------|
| `bun install` | Instalar dependências |
| `bun run dev` | Dev server em localhost:4321 |
| `bun run build` | Build de produção em dist/ |
| `bunx astro check` | Typecheck |
| `npx shadcn@latest add <cmp>` | Adicionar componente shadcn |

## Deploy

Configurado para deploy estático. Basta fazer o build e servir a pasta `dist/`. O `site` em `astro.config.ts` deve ser ajustado para o domínio real antes do deploy.
