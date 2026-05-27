# Dr. Dhiego Ventura — Nutricionista

[![Astro](https://img.shields.io/badge/Astro-6-ff5a03?logo=astro)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-1.x-fbf0df?logo=bun)](https://bun.sh)

Landing page institucional com tema dark premium para o nutricionista Dr. Dhiego Ventura (CRN 23100286). Presença digital completa: página principal de conversão, páginas legais, SEO local otimizado e infraestrutura técnica profissional.

---

## Início rápido

```bash
bun install        # instalar dependências
bun run dev        # dev server → http://localhost:4321
bun run build      # produção → dist/
```

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 6](https://astro.build) — output estático |
| Estilo | [Tailwind CSS 3](https://tailwindcss.com) — tokens customizados |
| Componentes | [shadcn/ui](https://ui.shadcn.com) v5 + [React 19](https://react.dev) |
| Runtime | [Bun](https://bun.sh) |
| Ícones | Material Symbols (Google Fonts CDN) |
| Tipografia | Manrope — 400, 500, 600, 700, 800 |
| Formulário | [FormSubmit](https://formsubmit.co) |
| SEO | `@astrojs/sitemap`, Schema.org `DietNutrition`, geo tags |
| Deploy | Vercel — `https://dr-dhiego-ventura.vercel.app` |

---

## Arquitetura

```
dr-dhiego-ventura/
├── astro.config.ts              # Astro + Tailwind + React + Sitemap
├── DESIGN.md                     # Design System (fonte da verdade)
├── GEMINI.md                     # Instruções para agentes de IA
├── tailwind.config.ts            # Tokens de cor, fonte, espaçamento 8px
├── tsconfig.json                 # Path alias @/ → src/
├── bun.lock                      # Lockfile Bun (versionado)
│
├── public/
│   ├── robots.txt                # Allow all + sitemap ref
│   ├── images/                   # 16 imagens (hero, avatar, consultório)
│   └── videos/
│       └── video-institucional.mp4
│
├── src/
│   ├── pages/
│   │   ├── index.astro                # Landing page principal
│   │   ├── politica-privacidade.astro # LGPD
│   │   └── termos-uso.astro           # Termos de serviço
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro           # Shell HTML + SEO + Schema.org
│   │
│   ├── components/
│   │   ├── Header.astro               # Navbar fixa com scroll effect
│   │   ├── Hero.astro                 # H1 + badge + preço + CTA WhatsApp
│   │   ├── Servicos.astro             # 3 cards + vídeo institucional
│   │   ├── Sobre.astro                # Bio + foto + CRN
│   │   ├── Vantagens.astro            # 4 cards de diferenciais
│   │   ├── Especialidades.astro       # Split layouts alternados
│   │   ├── Depoimentos.astro          # 4 depoimentos com avatar
│   │   ├── Planos.astro               # 3 colunas com destaque VIP
│   │   ├── Contato.astro              # Formulário FormSubmit + maps
│   │   ├── Clinica.astro              # Galeria de fotos + endereço
│   │   ├── Footer.astro               # Footer reveal + redes sociais
│   │   ├── WhatsAppFAB.astro          # Botão flutuante WhatsApp
│   │   ├── CookieConsent.astro        # Banner LGPD
│   │   └── ui/                        # Wrappers Astro → shadcn (React)
│   │       ├── Button.astro → button.tsx
│   │       ├── Card.astro   → card.tsx
│   │       ├── Input.astro  → input.tsx
│   │       └── Sheet.astro  → sheet.tsx
│   │
│   ├── data/
│   │   └── site.json                  # Single Source of Truth textual
│   │
│   └── styles/
│       └── global.css                 # Tailwind + @layer + animações
│
└── dist/                              # Build de produção (gitignored)
    ├── index.html
    ├── politica-privacidade/index.html
    ├── termos-uso/index.html
    ├── sitemap-index.xml
    └── sitemap-0.xml
```

---

## SEO

### Estratégia de keywords

Estratégia hierárquica para single-page + páginas de apoio, sem canibalização:

| Posição | Keyword primária | Keyword secundária |
|---|---|---|
| `<title>` | Nutricionista Rio de Janeiro | Zona Norte |
| Badge (H1 acima) | Nutricionista no Rio de Janeiro | — |
| Meta description | Nutricionista no Rio de Janeiro | Zona Norte |
| Corpo do texto | Aparece naturalmente | Zona Norte (seções Clínica, Sobre) |
| H1 | Limpo (benefício) | — |

### Infraestrutura técnica

| Elemento | Estado |
|---|---|
| `robots.txt` | `Allow: /` + sitemap reference |
| Sitemap XML | `@astrojs/sitemap` — 3 URLs, atualizado a cada build |
| Canonical | Self-referencing em todas as páginas |
| Favicon | `/images/logo-curta.png` + apple-touch-icon |
| Open Graph | `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name` |
| Twitter Card | `summary` card com title, description, image |
| Geo tags | `geo.region` (BR-RJ), `geo.placename`, `geo.position`, `ICBM` |
| Schema.org | `DietNutrition` + `GeoCoordinates` + `OpeningHoursSpecification` + `PostalAddress` + `areaServed` |
| Meta robots | `index, follow` |

### Schema.org — `DietNutrition`

Localizado em `src/layouts/BaseLayout.astro`. Inclui:

- **Identidade**: `name`, `alternateName`, `url`, `image`, `description`
- **Contato**: `telephone`, `email`
- **Endereço**: `PostalAddress` com CEP, cidade, estado, país
- **Coordenadas**: `GeoCoordinates` (-22.88, -43.29)
- **Horários**: `OpeningHoursSpecification` (Seg–Sex, 08:00–19:00)
- **Área atendida**: `City` → Rio de Janeiro
- **Mapa**: `hasMap` → Google Maps

---

## Design System

Fonte da verdade: **`DESIGN.md`**. Tokens replicados em `tailwind.config.ts`.

### Cores

| Token | Hex | Uso |
|---|---|---|
| Background (Navy) | `#071325` | Fundo principal, superfícies |
| Primary (Gold) | `#e6c364` | Botões, destaques, ícones |
| Secondary (Sage) | `#95d4b3` | Ícones secundários, saúde |
| Foreground | `#d7e3fc` | Texto principal |
| On-surface-variant | `#d0c5b2` | Texto secundário |

### Tipografia

| Nível | Size | Weight | Line-height |
|---|---|---|---|
| `display-lg` | clamp(40px, 5vw+16px, 56px) | 700 | 1.15 |
| `headline-lg` | clamp(28px, 2.5vw+12px, 32px) | 600 | 1.25 |
| `headline-md` | clamp(20px, 1.5vw+10px, 24px) | 600 | 1.33 |
| `body-lg` | clamp(16px, 0.5vw+14px, 18px) | 400 | 1.55 |
| `body-md` | clamp(14px, 0.25vw+13px, 16px) | 400 | 1.5 |
| `label-md` | clamp(12px, 0.2vw+11px, 14px) | 500 | 1.43 |

### Espaçamento (grid 8px)

| Token | Valor |
|---|---|
| `base` | 8px |
| `container-padding-desktop` | 40px |
| `container-padding-mobile` | 20px |
| `gutter` | 24px |
| `stack-sm / md / lg` | 12px / 24px / 48px |
| `section-gap` | 120px |
| `container-max` | 1280px |

### Arredondamento

`sm: 8px` / `DEFAULT: 16px` / `md: 24px` / `lg: 32px` / `xl: 48px` / `full: 9999px`

---

## Gerenciamento de conteúdo

Todo texto do site está centralizado em `src/data/site.json`. Nenhum conteúdo textual deve ser hardcoded nos componentes `.astro`.

### Estrutura do `site.json`

```
brand           → name, tagline, crn
seo             → title, description, keywords
contact         → whatsapp, phone, email, address, hours, googleMapsUrl
nav             → links do header
hero            → badge, headline, description, cta, price
servicos        → title, items[], video
sobre           → name, title, paragraph1, paragraph2
vantagens       → title, items[]
especialidades  → items[]
depoimentos     → title, items[]
planos          → title, subtitle, items[]
contato         → title, description, form
clinica         → title, localizacao, consultorio
footer          → description, social, links[], copyright
```

### Regras

1. Textos, labels, headings e descrições → sempre em `site.json`
2. Dados de contato (telefone, email, endereço) → referenciar de `site.json`, nunca hardcoded
3. O `BaseLayout` importa `contact`, `seo` e `brand` para popular meta tags e Schema.org
4. Componentes recebem dados via `import { chave } from '../data/site.json'`

---

## Desenvolvimento

### Comandos

| Comando | Ação |
|---|---|
| `bun install` | Instalar dependências |
| `bun run dev` | Dev server → `localhost:4321` |
| `bun run build` | Build produção → `dist/` |
| `bunx astro check` | Verificação de tipos |
| `npx shadcn@latest add <cmp>` | Adicionar componente shadcn/ui |

### Convenções

- **Package manager**: Bun (`bun.lock` versionado, nunca usar npm/yarn)
- **Path alias**: `@/` → `./src/` (tsconfig.json)
- **Wrapper pattern**: `.astro` em `ui/` importa `.tsx` de mesmo nome, sem `client:load`
- **Ícones**: `<span class="material-symbols-outlined">nome</span>`
- **Animações**: `data-animate="reveal|section|title|text|card|button|image"` com IntersectionObserver
- **Imagens**: `public/images/` — otimizadas via Astro (`Image` de `astro:assets` no Hero)
- **Vídeos**: `public/videos/`

### Verificação

```bash
bun run build      # deve completar sem erros
bunx astro check   # deve retornar 0 problemas
```

Não há suíte de testes. A validação é feita pelo build + typecheck + revisão visual no `bun run dev`.

---

## Deploy

Configurado para output estático. O domínio está definido em `astro.config.ts`:

```ts
site: 'https://dr-dhiego-ventura.vercel.app'
```

**Pré-deploy checklist:**

- [ ] Ajustar `site` em `astro.config.ts` para o domínio real
- [ ] Verificar `public/robots.txt` — sitemap URL deve apontar para o domínio real
- [ ] `bun run build` sem erros
- [ ] `dist/sitemap-index.xml` gera URLs corretas
- [ ] Schema.org validado no [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Google Search Console — submit sitemap
- [ ] Google Business Profile — NAP consistente com Schema.org

---

## Licença

Proprietário. Todos os direitos reservados — Dr. Dhiego Ventura.
