# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
bun install          # usar Bun, não npm/yarn
bun run dev          # dev server → localhost:4321
bun run build        # build produção → dist/
bunx astro check     # typecheck (deve retornar 0 erros)
```

## Arquitetura

Landing page estática (Astro 6, output: `static`), tema dark premium para o nutricionista Dr. Dhiego Ventura. Deploy na Vercel (`diego-ventura.vercel.app`).

**Fluxo de dados**: `src/data/site.json` (Single Source of Truth textual) → componentes `.astro` → `BaseLayout.astro` (shell HTML + SEO + Schema.org).

**Composição da página** (`src/pages/index.astro`): 11 seções — Header → Hero → Servicos → Sobre → Vantagens → Especialidades → Depoimentos → Planos → Clinica → Contato, com Footer fixo (footer-reveal em desktop) e WhatsAppFAB flutuante.

**Páginas legais**: `politica-privacidade.astro` e `termos-uso.astro` — conteúdo hardcoded (não usam `site.json`).

## Regras não-óbvias

- **Wrapper pattern shadcn**: `src/components/ui/Button.astro` (Astro) importa `button.tsx` (React). Mesmo padrão para Card, Input, Sheet. **Sem `client:load`** — hidratação React causa IDs duplicados em loops.
- **Tailwind 3, não v4**: `@astrojs/tailwind` v6 não suporta Tailwind v4. Config: `darkMode: 'class'`.
- **Ícones**: Material Symbols via Google Fonts CDN. Sintaxe: `<span class="material-symbols-outlined">nome_icone</span>`.
- **Formulário**: Processado por FormSubmit. URL em `site.json` → `contato.form.formSubmitUrl`.
- **Conteúdo textual**: Sempre em `site.json`, nunca hardcoded nos `.astro` (exceto páginas legais).
- **Design tokens**: Fonte da verdade é `DESIGN.md`. Tokens replicados em `tailwind.config.ts` e `global.css`.
- **Animações**: Atributo `data-animate="section|title|text|card|button|image"` com IntersectionObserver no `index.astro`. Delay via `data-animate-delay="1..8"`.
- **Imagens**: `public/images/` (estáticas). `.mp4` na raiz são gitignored; vídeos em `public/videos/`.

## Verificação

Não há suíte de testes. Validação é:
1. `bun run build` — 0 erros
2. `bunx astro check` — 0 problemas
3. Revisão visual no `bun run dev`
