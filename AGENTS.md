# AGENTS.md — Dr. Dhiego Ventura Landing Page

## Comandos

```bash
bun install          # package manager é Bun, não npm
bun run dev          # dev server em localhost:4321
bun run build        # build de produção → dist/
bunx astro check     # typecheck (0 erros = OK)
npx shadcn@latest add <component>  # adicionar componente shadcn/ui
```

## Arquitetura

```
src/
├── pages/index.astro      # única página (landing page)
├── layouts/BaseLayout.astro  # shell HTML + SEO + schema.org
├── components/
│   ├── Header.astro .. Clinica.astro  # 11 seções da página
│   └── ui/
│       ├── Button.astro   # wrappers Astro → React (shadcn)
│       ├── Card.astro
│       ├── Input.astro
│       └── *.tsx         # componentes shadcn/ui (React, @base-ui/react)
├── data/site.json         # TODO conteúdo textual centralizado
└── styles/global.css      # @tailwind + @fontsource/manrope + .glass-card
```

## Regras não-óbvias

- **Design tokens** vêm do `DESIGN.md` (fonte da verdade), replicados em `tailwind.config.ts` e `global.css`
- **Todo conteúdo textual** deve ir em `src/data/site.json`, nunca hardcoded nos `.astro`
- **Path alias** `@/*` → `./src/*` (configurado no tsconfig.json e components.json)
- **Wrapper pattern**: `.astro` no `src/components/ui/` importa o `.tsx` de mesmo nome (shadcn). Ex: `Button.astro` → `./button.tsx`
- **Sem `client:load`** nos wrappers — botões/cards são SSR-only. Hidratação React causa IDs duplicados em loops
- **Tailwind 3**, não v4. `@astrojs/tailwind` v6 não suporta Tailwind v4
- **Bun** como package manager. `bun.lock` é versionado. `npm` não gera lockfile compatível
- **FormSubmit** processa o formulário de contato. URL em `site.json` → `contato.form.formSubmitUrl`
- **Ícones**: Material Symbols via Google Fonts CDN (link no `<head>` do BaseLayout). Usar `<span class="material-symbols-outlined">nome_icone</span>`
- **Imagens** em `public/` (estáticas). Vídeos em `public/videos/`. `.mp4` na raiz são gitignored
- **Sem testes** — verificação é `bun run build` com 0 erros + `bunx astro check` limpo
- **Design system**: dark theme (`darkMode: 'class'` no Tailwind), cores Navy + Gold + Sage, fonte Manrope
