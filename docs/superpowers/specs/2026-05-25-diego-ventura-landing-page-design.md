# Design Doc: Dr. Dhiego Ventura — Landing Page

**Data:** 2026-05-25
**Status:** Aprovado
**Fonte:** Stitch Project "Automated Task Resumption" (ID: 5614520382895616111)

---

## Visão Geral

Landing page de produção para o nutricionista Dr. Dhiego Ventura. Site single-page com 12 seções, tema dark premium, foco em autoridade médica e luxo. Construído a partir de design gerado no Stitch, usando Astro + Tailwind.

---

## Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| Framework | Astro 5+ | Performance zero-JS por padrão, SEO nativo, ideal para landing pages |
| CSS | Tailwind CSS 4 | Config customizada com tokens do design system |
| Tipografia | Manrope (Google Fonts) | Toda a família, carregada via `@fontsource` |
| Ícones | Material Symbols (Google Fonts) | Ícones outline, subset otimizado |
| Imagens | Astro Image (sharp) | Otimização automática, formatos modernos (WebP/AVIF) |
| Formulário | FormSubmit | Serviço externo gratuito, zero backend |
| Deploy | A definir (Vercel/Netlify) | Ambos suportam Astro nativamente |
| Git | GitHub (`gh repo create`) | Repositório público, branch `main` |

---

## Design System

**Nome:** Premium Health & Authority
**Fonte:** `DESIGN.md` na raiz do projeto

### Paleta

| Token | Hex | Uso |
|-------|-----|-----|
| `background` / `surface` | `#071325` | Fundo principal (Navy Profundo) |
| `primary` | `#C9A84C` | CTAs, destaques, decoração (Dourado) |
| `secondary` | `#2D6A4F` | Ícones de saúde, badges (Verde Sage) |
| `on-surface` | `#F5F0E8` | Texto principal, contraste (Off-white) |
| `surface-container-high` | `#1F2A3D` | Cards elevados |
| `outline-variant` | `#4D4637` | Bordas sutis |

### Tipografia

| Escala | Font | Size | Weight | Uso |
|--------|------|------|--------|-----|
| `display-lg` | Manrope | 56px | 700 | Hero headline |
| `headline-lg` | Manrope | 32px | 600 | Títulos de seção |
| `headline-md` | Manrope | 24px | 600 | Subtítulos |
| `body-lg` | Manrope | 18px | 400 | Parágrafos grandes |
| `body-md` | Manrope | 16px | 400 | Texto corrido |
| `label-md` | Manrope | 14px | 500 | Labels, navegação |

### Elevação (Tonal Layers)

| Nível | Cor | Uso |
|-------|-----|-----|
| 0 (base) | `#071325` | Fundo da página |
| 1 (cards) | `#1F2A3D` + glass effect | Glass cards com blur |
| 2 (overlay) | backdrop-blur 12px | Modais |

### Componentes Base

- **Button:** Pill-shaped (`rounded-full`), Dourado sólido ou outline Off-white
- **GlassCard:** `backdrop-blur(12px)` + `rgba(20, 32, 50, 0.6)` + border Dourado 20%
- **Input:** Fundo Navy escuro, border Off-white 15%, focus → Dourado

---

## Arquitetura do Projeto

### Estrutura de Diretórios

```
diego-ventura/
├── DESIGN.md                    # Design system tokens
├── public/
│   └── images/                 # Imagens otimizadas localmente
│       ├── logo-longa.png
│       ├── logo-curta.png
│       ├── hero-diego.jpg
│       ├── about-diego.jpg
│       ├── clinica-entrada.jpg
│       ├── consultorio-1.jpg
│       ├── consultorio-2.jpg
│       ├── consultorio-3.jpg
│       ├── video-thumb.jpg
│       ├── especialidade-estetica.jpg
│       └── especialidade-diabetes.jpg
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navbar fixa com logo, links, CTA
│   │   ├── Hero.astro          # Seção principal com oferta VIP
│   │   ├── Servicos.astro      # Grid de serviços + vídeo
│   │   ├── Sobre.astro         # Bio do Dr. Dhiego
│   │   ├── Vantagens.astro     # 4 cards de vantagens
│   │   ├── Especialidades.astro # Split layouts (Estética + Diabetes)
│   │   ├── Depoimentos.astro   # Grid de 4 testemunhos
│   │   ├── Planos.astro        # 3 cards de planos/preços
│   │   ├── Contato.astro       # Formulário + endereço
│   │   ├── Clinica.astro       # Galeria de fotos + localização
│   │   ├── Footer.astro        # Links, contato, copyright
│   │   ├── WhatsAppFAB.astro   # Botão flutuante do WhatsApp
│   │   └── ui/
│   │       ├── Button.astro    # Botão reutilizável (variantes)
│   │       └── GlassCard.astro # Card com efeito glass
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell + Header + slot + Footer + FAB
│   ├── pages/
│   │   └── index.astro         # Página única
│   ├── styles/
│   │   └── global.css          # @tailwind + glass-card + utilities
│   └── data/
│       └── site.json           # Conteúdo centralizado (textos, depoimentos, planos)
├── tailwind.config.ts          # Tokens do DESIGN.md → Tailwind
├── astro.config.ts
├── package.json
└── .gitignore
```

### Árvore de Componentes

```
index.astro
└── BaseLayout.astro
    ├── Header.astro
    │   ├── <img> (logo)
    │   ├── <nav> (links)
    │   └── Button.astro ("Agendar Avaliação")
    ├── <main>
    │   ├── Hero.astro
    │   │   ├── <img> (foto Dr.)
    │   │   └── Button.astro ("Garantir Vaga")
    │   ├── Servicos.astro
    │   │   ├── GlassCard.astro (×3)
    │   │   └── <img> (vídeo thumbnail)
    │   ├── Sobre.astro
    │   │   ├── <img> (retrato)
    │   │   └── GlassCard.astro (CRN)
    │   ├── Vantagens.astro
    │   │   └── GlassCard.astro (×4)
    │   ├── Especialidades.astro
    │   │   ├── <img> (×2 split)
    │   │   └── Button.astro (×2 "Saber Mais")
    │   ├── Depoimentos.astro
    │   │   └── GlassCard.astro (×4)
    │   ├── Planos.astro
    │   │   ├── GlassCard.astro (×3 com destaque VIP)
    │   │   └── Button.astro (×3)
    │   ├── Contato.astro
    │   │   ├── <form> → FormSubmit
    │   │   └── GlassCard.astro (endereço)
    │   └── Clinica.astro
    │       └── <img> (×4 galeria)
    ├── Footer.astro
    └── WhatsAppFAB.astro
```

### Fluxo de Dados

1. **Conteúdo estático:** `site.json` → cada componente importa a chave relevante
2. **Imagens:** `public/images/` → Astro Image com `<Image />` para otimização
3. **Formulário:** `<form action="https://formsubmit.co/[hash]">` → POST → email do cliente
4. **WhatsApp:** Link direto `https://wa.me/5521967239874`

---

## Seções da Página

| # | Componente | Conteúdo | Destaque |
|---|------------|----------|----------|
| 1 | Header | Logo, nav, CTA | Fixo no topo com backdrop-blur |
| 2 | Hero | Headline VIP, preço R$387, foto | Badge "Promoção Abril" |
| 3 | Serviços | Nutrição Esportiva, Suplementação, Emagrecimento | Vídeo institucional |
| 4 | Sobre | Bio Dhiego Ventura, CRN 23100286 | Retrato com borda decorativa |
| 5 | Vantagens | 4 ícones com descrições | Grid 4 colunas |
| 6 | Especialidades | Nutricionista Estético + Controle Diabetes | Split layout imagem/texto |
| 7 | Depoimentos | 4 pacientes com iniciais | Cidade de origem |
| 8 | Planos | Perder peso, VIP (destaque), Ganhar peso | Card central com badge e ring |
| 9 | Contato | Form (nome, email, WhatsApp) + endereço | Inputs pill-shaped |
| 10 | Clínica | Localização + 3 fotos consultório | Google Maps link |
| 11 | Footer | Logo, links úteis, horários | Colunas responsivas |
| 12 | FAB WhatsApp | Ícone WhatsApp flutuante | Fixo bottom-right |

---

## Regras de Negócio

- Preço VIP: R$ 387,00 (3 meses). Consulta avulsa: R$ 198,00
- Promoção: válida durante Abril (badge no Hero)
- Localização: Av. Dom Hélder Câmara, 6644, Pilares, RJ
- WhatsApp: (21) 96723-9874
- Horário: Seg-Sex 08:00-19:00

---

## Responsividade

| Breakpoint | Grid | Margens | Comportamento |
|------------|------|---------|---------------|
| Desktop (lg+) | 12 colunas | 40px (container-padding-desktop) | Layout completo |
| Tablet (md) | 8 colunas | 24px | Grids reduzidos |
| Mobile (< md) | 4 colunas | 20px (container-padding-mobile) | Stack vertical, carrossel onde aplicável |

---

## SEO & Meta

- `<title>`: Dr. Dhiego Ventura - Nutrição & Longevidade
- Meta description sobre transformação de saúde
- Open Graph tags para compartilhamento
- Dados estruturados (schema.org `Person` / `LocalBusiness`)
- Sitemap gerado automaticamente pelo Astro

---

## Fora de Escopo (YAGNI)

- CMS / painel admin (conteúdo estático)
- Blog ou páginas internas (MVP é landing page única)
- Analytics (pode ser adicionado depois via script externo)
- Multi-idioma
- Sistema de agendamento real (link direto WhatsApp)
- Página de política de privacidade dedicada (links no footer apenas)
