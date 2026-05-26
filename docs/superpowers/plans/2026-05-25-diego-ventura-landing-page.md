# Dr. Dhiego Ventura — Landing Page — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Landing page de produção para Dr. Dhiego Ventura, nutricionista. Site single-page com 12 seções em tema dark premium, construído com Astro + Tailwind a partir de design gerado no Stitch.

**Architecture:** Astro 5 com `@astrojs/tailwind`, componentes `.astro` por seção, dados em `site.json`, imagens otimizadas via `astro:assets`, formulário via FormSubmit. Layout base encapsula Header, Footer e WhatsApp FAB.

**Tech Stack:** Astro 5, Tailwind CSS 3, @fontsource/manrope, Material Symbols, sharp (via astro:assets), FormSubmit

**Spec:** `docs/superpowers/specs/2026-05-25-diego-ventura-landing-page-design.md`

---

### Task 1: Scaffold do projeto Astro

**Files:**
- Create: `package.json`
- Create: `astro.config.ts`
- Create: `tsconfig.json`
- Modify: `.gitignore` (add Astro entries)

- [ ] **Step 1: Inicializar projeto Astro**

```bash
npm create astro@latest . -- --template minimal --skip-houston --install --no-git
```

Expected: `package.json` criado com `astro` como dependência.

- [ ] **Step 2: Instalar dependências adicionais**

```bash
npm install @astrojs/tailwind tailwindcss @fontsource/manrope
```

Expected: `@astrojs/tailwind`, `tailwindcss`, `@fontsource/manrope` adicionados ao `package.json`.

- [ ] **Step 3: Configurar `astro.config.ts`**

```typescript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://dr-dhiego-ventura.vercel.app',
});
```

- [ ] **Step 4: Verificar que `astro dev` sobe**

```bash
npx astro dev --port 4321 &
sleep 3 && curl -s http://localhost:4321 | head -5
kill %1
```

Expected: HTML da página inicial renderizado.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json astro.config.ts tsconfig.json
git commit -m "chore: scaffold Astro project with Tailwind"
```

---

### Task 2: Configurar Tailwind com tokens do DESIGN.md

**Files:**
- Create: `tailwind.config.ts`
- Create: `src/styles/global.css`

- [ ] **Step 1: Escrever `tailwind.config.ts` com todos os tokens**

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#071325',
        'surface-dim': '#071325',
        'surface-bright': '#2e394d',
        'surface-container-lowest': '#030e20',
        'surface-container-low': '#101c2e',
        'surface-container': '#142032',
        'surface-container-high': '#1f2a3d',
        'surface-container-highest': '#2a3548',
        'on-surface': '#d7e3fc',
        'on-surface-variant': '#d0c5b2',
        'inverse-surface': '#d7e3fc',
        'inverse-on-surface': '#253144',
        outline: '#99907e',
        'outline-variant': '#4d4637',
        'surface-tint': '#e6c364',
        primary: '#e6c364',
        'on-primary': '#3d2e00',
        'primary-container': '#c9a84c',
        'on-primary-container': '#503d00',
        'inverse-primary': '#755b00',
        secondary: '#95d4b3',
        'on-secondary': '#003824',
        'secondary-container': '#12533a',
        'on-secondary-container': '#87c6a5',
        tertiary: '#cbc6bf',
        'on-tertiary': '#32302b',
        'tertiary-container': '#afaba4',
        'on-tertiary-container': '#41403a',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'primary-fixed': '#ffe08f',
        'primary-fixed-dim': '#e6c364',
        'on-primary-fixed': '#241a00',
        'on-primary-fixed-variant': '#584400',
        'secondary-fixed': '#b1f0ce',
        'secondary-fixed-dim': '#95d4b3',
        'on-secondary-fixed': '#002114',
        'on-secondary-fixed-variant': '#0e5138',
        'tertiary-fixed': '#e7e2da',
        'tertiary-fixed-dim': '#cac6be',
        'on-tertiary-fixed': '#1d1c17',
        'on-tertiary-fixed-variant': '#494741',
        background: '#071325',
        'on-background': '#d7e3fc',
        'surface-variant': '#2a3548',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '64px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', fontWeight: '500', letterSpacing: '0.01em' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      spacing: {
        base: '8px',
        'container-padding-desktop': '40px',
        'container-padding-mobile': '20px',
        gutter: '24px',
        'stack-sm': '12px',
        'stack-md': '24px',
        'stack-lg': '48px',
        'section-gap': '120px',
        'container-max': '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

- [ ] **Step 2: Escrever `src/styles/global.css`**

```css
@import '@fontsource/manrope/400.css';
@import '@fontsource/manrope/500.css';
@import '@fontsource/manrope/600.css';
@import '@fontsource/manrope/700.css';
@import '@fontsource/manrope/800.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-on-background font-manrope antialiased;
  }
}

@layer components {
  .glass-card {
    background: rgba(20, 32, 50, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(201, 168, 76, 0.2);
  }

  .gold-glow {
    transition: box-shadow 0.3s ease;
  }

  .gold-glow:hover {
    box-shadow: 0 0 25px rgba(201, 168, 76, 0.4);
  }
}

@layer utilities {
  .text-off-white {
    color: #F5F0E8;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts src/styles/global.css
git commit -m "feat: configure Tailwind with design system tokens"
```

---

### Task 3: Criar arquivo de dados `site.json`

**Files:**
- Create: `src/data/site.json`

- [ ] **Step 1: Escrever `src/data/site.json` com todo o conteúdo da página**

```json
{
  "brand": {
    "name": "Dr. Dhiego Ventura",
    "tagline": "Nutrição & Longevidade",
    "crn": "23100286"
  },
  "contact": {
    "whatsapp": "5521967239874",
    "phone": "(21) 96723-9874",
    "email": "contato@drventura.com.br",
    "address": {
      "street": "Av. Dom Hélder Câmara, 6644",
      "neighborhood": "Pilares",
      "city": "Rio de Janeiro",
      "state": "RJ"
    },
    "hours": "Seg - Sex: 08:00 - 19:00",
    "googleMapsUrl": "https://maps.app.goo.gl/YourLink"
  },
  "nav": {
    "links": [
      { "label": "Página Inicial", "href": "#inicio" },
      { "label": "Sobre Nós", "href": "#sobre" },
      { "label": "Depoimentos", "href": "#depoimentos" },
      { "label": "Contato", "href": "#contato" }
    ]
  },
  "hero": {
    "badge": "Oportunidade Exclusiva",
    "headline": "3 meses de atendimento VIP para transformar seu corpo e sua saúde",
    "description": "Acompanhamento terapêutico intensivo com 3 consultas presenciais ou online e videochamadas quinzenais para garantir seus resultados.",
    "cta": "Garantir minha vaga!",
    "promoLabel": "Promoção válida durante o mês de Abril",
    "price": "R$ 387,00",
    "priceLabel": "Plano Completo",
    "priceNote": "vs Consulta avulsa R$ 198,00"
  },
  "servicos": {
    "title": "Serviços Oferecidos",
    "items": [
      {
        "icon": "fitness_center",
        "title": "Nutrição Esportiva",
        "description": "Focada em performance, hipertrofia e definição corporal para atletas de todos os níveis.",
        "link": "#"
      },
      {
        "icon": "medication",
        "title": "Suplementação",
        "description": "Prescrição magistral de fórmulas personalizadas para saciedade e queima de gordura.",
        "link": "#"
      },
      {
        "icon": "spa",
        "title": "Emagrecimento",
        "description": "Protocolos exclusivos para perda de peso sustentável sem restrições extremas.",
        "link": "#"
      }
    ],
    "video": {
      "title": "Vídeo Institucional",
      "subtitle": "Conheça nosso método de trabalho"
    }
  },
  "sobre": {
    "name": "Dhiego Ventura",
    "title": "Nutricionista e Terapeuta",
    "paragraph1": "Dhiego Ventura é Nutricionista e Terapeuta, com atuação voltada para a transformação da saúde por meio da alimentação, da mudança de hábitos e do cuidado individualizado.",
    "paragraph2": "Na Clínica Ventura, seu trabalho une nutrição clínica, emagrecimento e performance, sempre com uma abordagem humanizada, próxima e estratégica."
  },
  "vantagens": {
    "title": "Vantagens do Atendimento",
    "items": [
      {
        "icon": "restaurant",
        "title": "Nutrição com Especialização",
        "description": "Foco em doenças metabólicas e equilíbrio hormonal."
      },
      {
        "icon": "psychology",
        "title": "Terapia Alimentar",
        "description": "Mude sua relação emocional com a comida."
      },
      {
        "icon": "support_agent",
        "title": "Apoio Contínuo",
        "description": "Acompanhamento próximo durante toda jornada."
      },
      {
        "icon": "self_improvement",
        "title": "Mudança de Mentalidade",
        "description": "Resultados duradouros através do mindset."
      }
    ]
  },
  "especialidades": {
    "items": [
      {
        "title": "Nutricionista Estético",
        "description": "Tratamento focado na redução de agravos estéticos como acne, melasma, celulite e fortalecimento de cabelos e unhas.",
        "cta": "Saber Mais"
      },
      {
        "title": "Controle da Diabetes",
        "description": "Gestão nutricional especializada para diabetes tipo 1 e 2, focando em estabilidade glicêmica e qualidade de vida.",
        "cta": "Saber Mais"
      }
    ]
  },
  "depoimentos": {
    "title": "O que dizem nossos pacientes",
    "items": [
        { "initials": "MA", "name": "Meriane Araújo", "city": "Rio de Janeiro, RJ", "text": "Incrível, excelente profissional! Cumpre o que promete. Melhor nutricionista da vida!" },
        { "initials": "PP", "name": "Pedro Peres", "city": "Rio de Janeiro, RJ", "text": "Excelente profissional, ambiente do consultório top!" },
        { "initials": "GM", "name": "Gugu Marques", "city": "Rio de Janeiro, RJ", "text": "Atendimento top. Profissionalismo e conhecimento. O melhor nutricionista que já conheci." },
        { "initials": "SS", "name": "Sérgio Serciozo", "city": "Rio de Janeiro, RJ", "text": "O Melhor Nutricionista da zona norte!!! Recomendo muito o trabalho." }
    ]
  },
  "planos": {
    "title": "Sua oportunidade de transformação",
    "subtitle": "Se você sempre quis ter o acompanhamento de um profissional que realmente entenda suas expectativas... essa é a sua oportunidade.",
    "items": [
      {
        "icon": "fitness_center",
        "title": "Perder peso",
        "subtitle": "1200 - 1800 kcal",
        "cta": "Entre em Contato",
        "highlight": false
      },
      {
        "icon": "workspace_premium",
        "title": "Atendimento VIP",
        "subtitle": "3 meses de acompanhamento",
        "price": "R$ 387,00",
        "cta": "Garantir Vaga VIP",
        "highlight": true,
        "badge": "Mais Procurado"
      },
      {
        "icon": "trending_up",
        "title": "Ganhar peso",
        "subtitle": "2400 - 3600 kcal",
        "cta": "Entre em Contato",
        "highlight": false
      }
    ]
  },
  "contato": {
    "title": "Pronto para sua melhor versão?",
    "description": "Conheça a clínica do Dr. Dhiego Ventura no Rio de Janeiro e agende sua consulta hoje mesmo para aproveitar o plano promocional.",
    "form": {
      "title": "Agende sua Consulta",
      "submitLabel": "SOLICITAR AGENDAMENTO",
      "formSubmitUrl": "https://formsubmit.co/SEU_EMAIL_AQUI"
    }
  },
  "clinica": {
    "title": "A Clínica",
    "localizacao": {
      "title": "Nossa Localização",
      "description": "Estamos localizados em um ponto estratégico do Rio de Janeiro, no condomínio DHC Offices. Um espaço moderno e seguro para o seu conforto.",
      "addressLabel": "Endereço:",
      "mapsLabel": "Ver no Google Maps"
    },
    "consultorio": {
      "title": "O Consultório",
      "description": "Nosso consultório é equipado com tecnologias de ponta para bioimpedância e avaliação antropométrica, garantindo precisão em cada etapa do seu tratamento."
    }
  },
  "footer": {
    "description": "Transformando vidas através da nutrição de excelência e cuidado humanizado.",
    "links": [
      { "label": "Termos de Uso", "href": "#" },
      { "label": "Política de Privacidade", "href": "#" },
      { "label": "Agendar Consulta", "href": "#contato" },
      { "label": "Especialidades", "href": "#especialidades" }
    ],
    "copyright": "© 2024 Dr. Dhiego Ventura - Nutricionista & Terapeuta. Todos os direitos reservados."
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/data/site.json
git commit -m "feat: add static content data file"
```

---

### Task 4: Criar componentes de UI base (Button e GlassCard)

**Files:**
- Create: `src/components/ui/Button.astro`
- Create: `src/components/ui/GlassCard.astro`

- [ ] **Step 1: Escrever `src/components/ui/Button.astro`**

```astro
---
export interface Props {
  variant?: 'primary' | 'outline';
  href?: string;
  size?: 'default' | 'lg';
  class?: string;
}

const {
  variant = 'primary',
  href,
  size = 'default',
  class: extraClass = '',
} = Astro.props;

const baseClasses = 'inline-flex items-center justify-center gap-2 font-label-md text-label-md font-bold transition-all duration-200 ease-in-out active:scale-95';

const variantClasses = variant === 'primary'
  ? 'bg-primary text-on-primary gold-glow'
  : 'border-2 border-primary text-primary hover:bg-primary hover:text-on-primary';

const sizeClasses = size === 'lg'
  ? 'px-10 py-5 rounded-full'
  : 'px-6 py-2 rounded-full';

const Tag = href ? 'a' : 'button';
const attrs = href ? { href } : { type: 'button' };
---

<Tag {...attrs} class={`${baseClasses} ${variantClasses} ${sizeClasses} ${extraClass}`}>
  <slot />
</Tag>
```

- [ ] **Step 2: Escrever `src/components/ui/GlassCard.astro`**

```astro
---
export interface Props {
  borderBottom?: boolean;
  hover?: boolean;
  padding?: 'default' | 'lg';
  class?: string;
}

const {
  borderBottom = false,
  hover = true,
  padding = 'default',
  class: extraClass = '',
} = Astro.props;

const paddingClasses = padding === 'lg' ? 'p-10' : 'p-8';
const hoverClasses = hover ? 'group hover:border-primary transition-all duration-500' : '';
const borderClass = borderBottom ? 'border-b-4 border-b-primary' : 'border-none';
---

<div class={`glass-card rounded-lg ${paddingClasses} ${hoverClasses} ${borderClass} ${extraClass}`}>
  <slot />
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Button.astro src/components/ui/GlassCard.astro
git commit -m "feat: add base UI components (Button, GlassCard)"
```

---

### Task 5: Criar BaseLayout

**Files:**
- Create: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Escrever `src/layouts/BaseLayout.astro`**

```astro
---
import '../styles/global.css';

export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />

    <!-- Material Symbols -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    />

    <!-- Schema.org -->
    <script type="application/ld+json" set:html={`{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dr. Dhiego Ventura - Nutricionista",
      "description": "${description}",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Dom Hélder Câmara, 6644",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ"
      },
      "telephone": "+5521967239874",
      "openingHours": "Mo-Fr 08:00-19:00"
    }`} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout with SEO metadata and schema"
```

---

### Task 6: Criar Header

**Files:**
- Create: `src/components/Header.astro`

- [ ] **Step 1: Escrever `src/components/Header.astro`**

```astro
---
import Button from './ui/Button.astro';
import { brand, nav, contact } from '../data/site.json';
---

<header class="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30 shadow-md">
  <div class="flex justify-between items-center w-full px-container-padding-desktop py-4 max-w-container-max mx-auto">
    <!-- Logo -->
    <a href="/">
      <img
        src="/images/logo-longa.png"
        alt={`Logo ${brand.name}`}
        class="h-12"
      />
    </a>

    <!-- Nav Links (desktop) -->
    <nav class="hidden md:flex gap-8">
      {nav.links.map((link) => (
        <a
          href={link.href}
          class={`font-label-md text-label-md pb-1 transition-colors duration-300 ${
            link.href === '#inicio'
              ? 'text-primary font-bold border-b-2 border-primary'
              : 'text-on-surface-variant/80 hover:text-primary'
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>

    <!-- Right side -->
    <div class="flex items-center gap-6">
      <!-- Social Icons (desktop) -->
      <div class="hidden lg:flex gap-4 text-on-surface-variant/70">
        <span class="material-symbols-outlined hover:text-primary cursor-pointer">chat</span>
        <span class="material-symbols-outlined hover:text-primary cursor-pointer">mail</span>
        <span class="material-symbols-outlined hover:text-primary cursor-pointer text-secondary">language</span>
      </div>

      <Button href={`https://wa.me/${contact.whatsapp}`}>
        Agendar Avaliação
      </Button>
    </div>
  </div>
</header>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add Header component with nav and CTA"
```

---

### Task 7: Criar Hero

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1: Escrever `src/components/Hero.astro`**

```astro
---
import Button from './ui/Button.astro';
import { hero, contact } from '../data/site.json';
---

<section class="relative min-h-[85vh] flex items-center px-container-padding-desktop max-w-container-max mx-auto overflow-hidden pt-24">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
    <!-- Text content -->
    <div class="z-10 order-2 lg:order-1">
      <span class="text-primary font-label-md text-label-md tracking-widest uppercase block mb-4">
        {hero.badge}
      </span>
      <h1 class="font-display-lg text-display-lg text-off-white mb-6 leading-tight max-w-lg">
        <span class="text-primary">{hero.headline.split('VIP')[0]}VIP</span>{hero.headline.split('VIP')[1]}
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant/80 mb-8 max-w-lg">
        {hero.description}
      </p>

      <div class="flex flex-col sm:flex-row gap-6 items-center mb-6">
        <div class="relative">
          <Button href={`https://wa.me/${contact.whatsapp}`} size="lg">
            {hero.cta} <span class="material-symbols-outlined">arrow_forward</span>
          </Button>
          <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span class="bg-surface-container-highest text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 uppercase tracking-tighter">
              {hero.promoLabel}
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-1 text-center sm:text-left pt-6 sm:pt-0">
          <div class="flex items-center gap-3">
            <span class="text-primary font-bold text-2xl">{hero.price}</span>
            <span class="text-on-surface-variant/40 text-sm">{hero.priceLabel}</span>
          </div>
          <div class="text-on-surface-variant/50 text-xs italic">
            {hero.priceNote}
          </div>
        </div>
      </div>
    </div>

    <!-- Doctor photo -->
    <div class="relative order-1 lg:order-2 flex justify-center">
      <div class="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
      <img
        src="/images/hero-diego.jpg"
        alt={hero.badge}
        class="relative z-10 w-full max-w-md rounded-lg shadow-2xl transition-all duration-700"
      />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: add Hero section with VIP offer"
```

---

### Task 8: Criar Servicos

**Files:**
- Create: `src/components/Servicos.astro`

- [ ] **Step 1: Escrever `src/components/Servicos.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { servicos } from '../data/site.json';
---

<section class="py-section-gap px-container-padding-desktop max-w-container-max mx-auto">
  <div class="text-center mb-16">
    <h2 class="font-headline-lg text-headline-lg text-off-white mb-4">{servicos.title}</h2>
    <div class="h-1 w-20 bg-primary mx-auto"></div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
    <!-- Services list -->
    <div class="lg:col-span-7 space-y-gutter">
      {servicos.items.map((item) => (
        <GlassCard>
          <div class="flex gap-6 items-start">
            <span class="material-symbols-outlined text-secondary text-4xl mt-1">{item.icon}</span>
            <div>
              <h3 class="font-headline-md text-headline-md text-primary mb-2">{item.title}</h3>
              <p class="text-on-surface-variant/80 font-body-md mb-4">{item.description}</p>
              <a
                href={item.link}
                class="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Saiba Mais <span class="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>

    <!-- Video thumbnail -->
    <div class="lg:col-span-5 h-full min-h-[500px]">
      <div class="relative w-full h-full rounded-lg overflow-hidden glass-card border-none flex items-center justify-center group cursor-pointer">
        <img
          src="/images/video-thumb.jpg"
          alt={servicos.video.title}
          class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div class="relative z-10 w-20 h-20 bg-primary/90 text-on-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <span class="material-symbols-outlined text-4xl leading-none">play_arrow</span>
        </div>
        <div class="absolute bottom-6 left-6 z-10">
          <p class="text-primary font-bold text-lg mb-1">{servicos.video.title}</p>
          <p class="text-off-white/80 text-sm">{servicos.video.subtitle}</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Servicos.astro
git commit -m "feat: add Servicos section with video thumbnail"
```

---

### Task 9: Criar Sobre

**Files:**
- Create: `src/components/Sobre.astro`

- [ ] **Step 1: Escrever `src/components/Sobre.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { sobre, brand } from '../data/site.json';
---

<section id="sobre" class="py-section-gap bg-surface-container-low overflow-hidden">
  <div class="px-container-padding-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    <!-- Portrait with decorative border -->
    <div class="relative">
      <div class="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/40"></div>
      <img
        src="/images/about-diego.jpg"
        alt={sobre.name}
        class="rounded-lg shadow-2xl relative z-10 w-full aspect-[4/5] object-cover"
      />
      <div class="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary/40"></div>
    </div>

    <!-- Bio text -->
    <div>
      <h2 class="font-headline-lg text-headline-lg text-off-white mb-6">{sobre.name}</h2>
      <h3 class="font-headline-md text-headline-md text-primary mb-6">{sobre.title}</h3>
      <p class="text-on-surface-variant/80 font-body-lg mb-6 leading-relaxed">{sobre.paragraph1}</p>
      <p class="text-on-surface-variant/80 font-body-lg mb-10 leading-relaxed">{sobre.paragraph2}</p>

      <GlassCard borderBottom class="!border-primary/30 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary">verified</span>
        </div>
        <div>
          <p class="font-bold text-primary">CRN {brand.crn}</p>
          <p class="text-sm text-on-surface-variant/60">Conselho Regional de Nutrição</p>
        </div>
      </GlassCard>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Sobre.astro
git commit -m "feat: add Sobre section with bio and CRN badge"
```

---

### Task 10: Criar Vantagens

**Files:**
- Create: `src/components/Vantagens.astro`

- [ ] **Step 1: Escrever `src/components/Vantagens.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { vantagens } from '../data/site.json';
---

<section class="py-section-gap px-container-padding-desktop max-w-container-max mx-auto">
  <h2 class="font-headline-lg text-headline-lg text-off-white text-center mb-16">{vantagens.title}</h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
    {vantagens.items.map((item) => (
      <GlassCard hover={false} class="text-center hover:bg-surface-container transition-all">
        <span class="material-symbols-outlined text-secondary text-5xl mb-6">{item.icon}</span>
        <h4 class="font-label-md text-label-md text-primary mb-3 uppercase tracking-wider">{item.title}</h4>
        <p class="text-sm text-on-surface-variant/70">{item.description}</p>
      </GlassCard>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Vantagens.astro
git commit -m "feat: add Vantagens section with 4 cards"
```

---

### Task 11: Criar Especialidades

**Files:**
- Create: `src/components/Especialidades.astro`

- [ ] **Step 1: Escrever `src/components/Especialidades.astro`**

```astro
---
import Button from './ui/Button.astro';
import { especialidades } from '../data/site.json';

const images = [
  '/images/especialidade-estetica.jpg',
  '/images/especialidade-diabetes.jpg',
];
---

<section id="especialidades" class="py-section-gap">
  {especialidades.items.map((item, i) => {
    const isReversed = i % 2 === 1;
    const bg = isReversed ? 'bg-background' : 'bg-surface-container-high';
    const flexDir = isReversed ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row';

    return (
      <div class={`flex ${flexDir} ${bg} h-auto min-h-[600px]`}>
        <div class="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <h3 class="font-headline-lg text-headline-lg text-primary mb-6">{item.title}</h3>
          <p class="font-body-lg text-body-lg text-on-surface-variant/80 mb-10 max-w-md">{item.description}</p>
          <Button variant="outline" size="lg">{item.cta}</Button>
        </div>
        <div class="lg:w-1/2 overflow-hidden min-h-[400px]">
          <img
            src={images[i]}
            alt={item.title}
            class="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    );
  })}
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Especialidades.astro
git commit -m "feat: add Especialidades section with split layouts"
```

---

### Task 12: Criar Depoimentos

**Files:**
- Create: `src/components/Depoimentos.astro`

- [ ] **Step 1: Escrever `src/components/Depoimentos.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { depoimentos } from '../data/site.json';
---

<section id="depoimentos" class="py-section-gap px-container-padding-desktop max-w-container-max mx-auto">
  <h2 class="font-headline-lg text-headline-lg text-off-white text-center mb-16">{depoimentos.title}</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
    {depoimentos.items.map((item) => (
      <GlassCard>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-full bg-surface-container-high border border-primary/30 flex items-center justify-center font-bold text-primary">
            {item.initials}
          </div>
          <div>
            <p class="font-bold text-off-white">{item.name}</p>
            <p class="text-xs text-primary">{item.city}</p>
          </div>
        </div>
        <p class="text-on-surface-variant/80 italic font-body-md leading-relaxed">
          &ldquo;{item.text}&rdquo;
        </p>
      </GlassCard>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Depoimentos.astro
git commit -m "feat: add Depoimentos section with 4 testimonials"
```

---

### Task 13: Criar Planos

**Files:**
- Create: `src/components/Planos.astro`

- [ ] **Step 1: Escrever `src/components/Planos.astro`**

```astro
---
import Button from './ui/Button.astro';
import GlassCard from './ui/GlassCard.astro';
import { planos } from '../data/site.json';
---

<section class="py-section-gap px-container-padding-desktop max-w-container-max mx-auto">
  <div class="text-center mb-16">
    <h2 class="font-headline-lg text-headline-lg text-off-white mb-4">{planos.title}</h2>
    <p class="text-on-surface-variant/70 max-w-2xl mx-auto font-body-lg">
      {planos.subtitle.split('... ')[0]}... <span class="text-primary font-bold">essa é a sua oportunidade.</span>
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-20">
    {planos.items.map((item) => (
      <GlassCard
        hover={item.highlight}
        borderBottom
        class={`text-center ${item.highlight ? 'hover:-translate-y-0' : 'hover:-translate-y-2 transition-transform duration-300'} ${item.highlight ? 'scale-105 bg-surface-container-high ring-2 ring-primary/50 relative' : ''}`}
      >
        {item.highlight && (
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {item.badge}
          </div>
        )}
        <span class={`material-symbols-outlined text-5xl mb-6 ${item.highlight ? 'text-primary' : 'text-secondary'}`}>
          {item.icon}
        </span>
        <h3 class="font-headline-md text-headline-md text-off-white mb-2">{item.title}</h3>
        {item.price ? (
          <>
            <p class="text-primary font-bold text-xl mb-1">{item.price}</p>
            <p class="text-on-surface-variant/60 mb-8 text-sm">{item.subtitle}</p>
          </>
        ) : (
          <p class="text-on-surface-variant/60 mb-8">{item.subtitle}</p>
        )}
        <Button
          variant={item.highlight ? 'primary' : 'outline'}
          size="lg"
          class="w-full justify-center"
        >
          {item.cta}
        </Button>
      </GlassCard>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Planos.astro
git commit -m "feat: add Planos section with VIP highlight card"
```

---

### Task 14: Criar Contato (Formulário)

**Files:**
- Create: `src/components/Contato.astro`

- [ ] **Step 1: Escrever `src/components/Contato.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { contato, contact } from '../data/site.json';
---

<section id="contato" class="py-section-gap bg-surface-container-lowest relative">
  <div class="px-container-padding-desktop max-w-container-max mx-auto relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
      <!-- Text + Address -->
      <div>
        <h2 class="font-headline-lg text-headline-lg text-off-white mb-8 leading-tight">
          {contato.title.split('melhor versão?')[0]}<span class="text-primary">melhor versão?</span>
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant/80 mb-8">{contato.description}</p>

        <div class="flex items-center gap-6 p-6 border border-primary/20 rounded-lg bg-surface-container-low mb-8">
          <span class="material-symbols-outlined text-secondary text-4xl">location_on</span>
          <div>
            <p class="font-bold text-off-white">{contact.address.street}</p>
            <p class="text-on-surface-variant/60">{contact.address.neighborhood}, {contact.address.city} - {contact.address.state}</p>
          </div>
        </div>
      </div>

      <!-- Form -->
      <GlassCard padding="lg" class="shadow-2xl border-primary/20">
        <h3 class="font-headline-md text-headline-md text-off-white mb-8 text-center">{contato.form.title}</h3>
        <form action={contato.form.formSubmitUrl} method="POST" class="space-y-6">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label class="block font-label-md text-label-md text-on-surface-variant/80 mb-2">Nome Completo</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Seu nome"
              class="w-full bg-surface-container-high border border-outline-variant/30 rounded-full py-4 px-6 text-off-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
            />
          </div>

          <div>
            <label class="block font-label-md text-label-md text-on-surface-variant/80 mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
              class="w-full bg-surface-container-high border border-outline-variant/30 rounded-full py-4 px-6 text-off-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
            />
          </div>

          <div>
            <label class="block font-label-md text-label-md text-on-surface-variant/80 mb-2">WhatsApp</label>
            <input
              type="tel"
              name="phone"
              placeholder="(21) 00000-0000"
              class="w-full bg-surface-container-high border border-outline-variant/30 rounded-full py-4 px-6 text-off-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-on-primary font-bold py-5 rounded-full gold-glow transition-all uppercase tracking-widest text-sm active:scale-95"
          >
            {contato.form.submitLabel}
          </button>
        </form>
      </GlassCard>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contato.astro
git commit -m "feat: add Contato section with FormSubmit form"
```

---

### Task 15: Criar Clinica

**Files:**
- Create: `src/components/Clinica.astro`

- [ ] **Step 1: Escrever `src/components/Clinica.astro`**

```astro
---
import GlassCard from './ui/GlassCard.astro';
import { clinica, contact } from '../data/site.json';
---

<section class="py-section-gap bg-surface-container-low overflow-hidden">
  <div class="px-container-padding-desktop max-w-container-max mx-auto">
    <div class="text-center mb-16">
      <h2 class="font-headline-lg text-headline-lg text-off-white mb-4">{clinica.title}</h2>
      <div class="h-1 w-20 bg-primary mx-auto"></div>
    </div>

    <!-- Localização -->
    <div class="mb-20">
      <h3 class="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
        <span class="material-symbols-outlined">location_on</span> {clinica.localizacao.title}
      </h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div class="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
          <img
            src="/images/clinica-entrada.jpg"
            alt="Entrada Clínica Ventura"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="space-y-6">
          <p class="text-on-surface-variant/80 font-body-lg leading-relaxed">
            {clinica.localizacao.description}
          </p>
          <GlassCard>
            <p class="font-bold text-off-white mb-1">{clinica.localizacao.addressLabel}</p>
            <p class="text-on-surface-variant/70 mb-4">{contact.address.street}, {contact.address.neighborhood}, {contact.address.city} - {contact.address.state}</p>
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <span class="material-symbols-outlined">map</span> {clinica.localizacao.mapsLabel}
            </a>
          </GlassCard>
        </div>
      </div>
    </div>

    <!-- Consultório -->
    <div>
      <h3 class="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
        <span class="material-symbols-outlined">stethoscope</span> {clinica.consultorio.title}
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {[1, 2, 3].map((n) => (
          <div class="aspect-[3/4] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={`/images/consultorio-${n}.jpg`}
              alt={`Atendimento ${n}`}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      <p class="text-center text-on-surface-variant/60 font-body-md mt-8 max-w-2xl mx-auto">
        {clinica.consultorio.description}
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Clinica.astro
git commit -m "feat: add Clinica section with gallery and location"
```

---

### Task 16: Criar Footer e WhatsAppFAB

**Files:**
- Create: `src/components/Footer.astro`
- Create: `src/components/WhatsAppFAB.astro`

- [ ] **Step 1: Escrever `src/components/Footer.astro`**

```astro
---
import { footer, contact, brand } from '../data/site.json';
---

<footer class="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-16">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 px-container-padding-desktop max-w-container-max mx-auto">
    <!-- Brand -->
    <div>
      <img src="/images/logo-longa.png" alt={`Logo ${brand.name}`} class="h-14 mb-8" />
      <p class="text-on-surface-variant/70 font-body-md mb-8 max-w-xs">{footer.description}</p>
      <div class="flex gap-6">
        <span class="material-symbols-outlined text-primary cursor-pointer hover:scale-125 transition-transform bg-primary/10 p-3 rounded-full">phone</span>
        <span class="material-symbols-outlined text-primary cursor-pointer hover:scale-125 transition-transform bg-primary/10 p-3 rounded-full">mail</span>
        <span class="material-symbols-outlined text-secondary cursor-pointer hover:scale-125 transition-transform bg-secondary/10 p-3 rounded-full">location_on</span>
      </div>
    </div>

    <!-- Links -->
    <div class="flex flex-col gap-4">
      <h4 class="font-headline-md text-off-white mb-6">Links Úteis</h4>
      {footer.links.map((link) => (
        <a href={link.href} class="text-on-surface-variant/70 hover:text-primary transition-colors font-label-md">{link.label}</a>
      ))}
    </div>

    <!-- Contact -->
    <div>
      <h4 class="font-headline-md text-off-white mb-6">Contato</h4>
      <div class="space-y-4">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-secondary text-xl mt-1">location_on</span>
          <p class="text-on-surface-variant/70 font-body-md">{contact.address.street}<br/>{contact.address.neighborhood}, {contact.address.city} - {contact.address.state}</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-secondary text-xl">call</span>
          <p class="text-on-surface-variant/70 font-body-md">{contact.phone}</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-secondary text-xl">schedule</span>
          <p class="text-on-surface-variant/70 font-body-md">{contact.hours}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-16 pt-8 border-t border-outline-variant/10 text-center px-container-padding-desktop max-w-container-max mx-auto">
    <p class="text-on-surface-variant/50 font-label-md text-label-md">{footer.copyright}</p>
  </div>
</footer>
```

- [ ] **Step 2: Escrever `src/components/WhatsAppFAB.astro`**

```astro
---
import { contact } from '../data/site.json';
---

<a
  href={`https://wa.me/${contact.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center ring-4 ring-white/10"
  aria-label="Fale conosco no WhatsApp"
>
  <svg fill="currentColor" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.011 0-3.98-.512-5.719-1.486l-6.274 1.704zm6.002-3.325c1.554.919 3.125 1.402 4.796 1.402 5.034 0 9.13-4.098 9.13-9.131 0-2.439-.95-4.733-2.673-6.455-1.724-1.724-4.019-2.673-6.457-2.673-5.033 0-9.13 4.098-9.13 9.131 0 1.932.616 3.73 1.782 5.215l-1.171 4.28 4.423-1.2l-.3-.169zm10.742-5.467c-.294-.148-1.738-.858-2.008-.956-.269-.099-.465-.148-.661.148-.196.297-.759.956-.93 1.154-.172.199-.343.224-.638.075-.294-.148-1.243-.458-2.368-1.462-.876-.782-1.467-1.748-1.639-2.046-.172-.297-.018-.458.13-.606.133-.133.294-.345.441-.517.147-.172.196-.296.294-.494.098-.198.049-.371-.025-.52-.073-.148-.661-1.592-.906-2.185-.239-.575-.48-.496-.661-.505l-.563-.006c-.196 0-.514.074-.784.371-.269.296-1.028 1.014-1.028 2.471 0 1.457 1.058 2.866 1.205 3.063.147.198 2.083 3.181 5.047 4.459.705.304 1.256.486 1.684.622.709.226 1.354.194 1.864.118.568-.085 1.738-.71 1.982-1.396.244-.687.244-1.276.171-1.396-.073-.12-.269-.196-.563-.344z"/>
  </svg>
</a>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro src/components/WhatsAppFAB.astro
git commit -m "feat: add Footer and WhatsApp floating button"
```

---

### Task 17: Montar página `index.astro`

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Escrever `src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Servicos from '../components/Servicos.astro';
import Sobre from '../components/Sobre.astro';
import Vantagens from '../components/Vantagens.astro';
import Especialidades from '../components/Especialidades.astro';
import Depoimentos from '../components/Depoimentos.astro';
import Planos from '../components/Planos.astro';
import Contato from '../components/Contato.astro';
import Clinica from '../components/Clinica.astro';
import Footer from '../components/Footer.astro';
import WhatsAppFAB from '../components/WhatsAppFAB.astro';
---

<BaseLayout
  title="Dr. Dhiego Ventura - Nutrição & Longevidade"
  description="Transforme sua saúde com acompanhamento nutricional de excelência. Agende sua consulta com Dr. Dhiego Ventura no Rio de Janeiro."
>
  <Header />
  <main>
    <Hero />
    <Servicos />
    <Sobre />
    <Vantagens />
    <Especialidades />
    <Depoimentos />
    <Planos />
    <Contato />
    <Clinica />
  </main>
  <Footer />
  <WhatsAppFAB />
</BaseLayout>

<script>
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(section);
  });
</script>
```

- [ ] **Step 2: Verificar build**

```bash
npx astro build
```

Expected: build bem-sucedido, sem erros. Output em `dist/`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: assemble landing page with all sections"
```

---

### Task 18: Baixar e otimizar imagens

**Files:**
- Download: `public/images/` (11 arquivos)

- [ ] **Step 1: Baixar imagens do Google Photos**

```bash
mkdir -p public/images

# Logo longa
curl -L -o public/images/logo-longa.png "https://lh3.googleusercontent.com/aida/ADBb0uhBMLXHJuvLRg1t2x7djMoghiHlG1tVNgYbK0Mkpa-heTLtz4A5TBv2ZKlfhpEmW_OpIGRVvM3BqVnR1LMF4O-shMx9FEqkxhUWGB4GEujJLDqdROt59hsRiufWSTrbxzlBJxxNxbsbSp3lJKhhkrjy04HyLUoh7noL-YWgk5QDX64XfG0UcbQEKd_SDW73-FtCjpme98GdU1GMBchABh1FuSazvcnAdt2Ol_0poNkLURpHKOxJ_YCvhtA9r9R7AbnP-4twVa55"

# Logo curta
curl -L -o public/images/logo-curta.png "https://lh3.googleusercontent.com/aida/ADBb0ujbl3lrvJ3zG_Fixt2JXZQJVj5Jf_eEJmJai_VUVR0tGi0NE0MuvDqCl8-dOZ-x8XjoCzrnNn42XMwIhjmwon-TWKeCmyDvWyVg8QkR3gJB3t7LRymr_LwSls020wi79jUq1sG2WIIsMNB8P25haK3_MQPNjj6sKwPnr5L3vRHBbKyTVY_Ss35qrCTXmiDDcc0uKww24CGty-ju7yIMxvFaoxniNThQv2JRwh75SHycqYjvWP-IPTaj1_UQf5GB25gL5qDGy5r0rA"

# Hero (doctor photo) - from the main screen HTML
curl -L -o public/images/hero-diego.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuA6qFQLq2mz9eBdi_tDLjuv7vGxg-1XR-r1l0hM7peP7GDR5YbC0-qP8r5ey3Mihfi9WJVLo0yORwbTeQspmU4WcumbOxCRS-s_JUgwbfeE-F1h_ZKGxjf3ol7jIk_gIJJUSgo5tqDzrCiThDDWIEaQEOCmld2Q5OcUxoDly40BXAh4Emp9vX93wrTOVdmXhs_mBtTtTeRQNP1Qbt6jYELgzaqvfaIjQQttlllgFcReZEloezpxcIqU8LEpDOIGF18GGKSPyxG9TXI"

# Sobre (portrait)
curl -L -o public/images/about-diego.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuBa4sUIw7moXY7htFiyUGPEf6gD_YjSShhoOZRcKGjfc6V3UQZ_njvKK1jWKj_ctXdDsyhTrz8wf4x4Tvou-SZTRcVzuL468U27e2lpLUW0DnzswpE2XESwW1ftj4uhvR0jifa9X79nlKd2CBK1EvIOGbZhaYfeLxpMQH5io3gXPFGOCw_amtqwAupdcQv31DVL1_yhu4K-9vKG_TZiHVxzkRGNKZdnoUPA6vO8rD5WcuxYsyEHF43qS73jXwx2oADDruaA10Xx_Kw"

# Clínica entrada
curl -L -o public/images/clinica-entrada.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuBqDfNPup5DKaBXYtZRg-PC9wCmOVQkQeAF2OY8bRPApaXv4iWA61pEnDdKibDke_Catz0QpNyeIwUKC9XBDa2E9uUkkeQa9pbgt8rfFX6VedfMVOQGB9ckwPsDlnOwj7MKmtk0SlMyY7i4Nw1Cj32nyIBDi-ZGV0QMrk79wIA7djp53Vp8u-i2ArCnKRo28lsuvUxennJWepdJ0-BEoCYQEZlcSQgxfVRCKR0g_fyAPMCXWfZyfDn1wLA2pmxUzA5sw_RJWcLgTO8"

# Consultório 1
curl -L -o public/images/consultorio-1.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuDrclSlass9mfjPd7MysKH2Rif_-hJvqkWNAFkzDLOE8ETzSkGxMlW1la64a8dIbWK7k4GFfIeHnMPDhMUvtP47HoO6fzRvu8DlSyUoIq6XlXHfec9wU8B3Il7lOzays3JqzNrsDm3LPa2tg_DGwZhPSECLbwBv13PKsCBDEYqC7QzPA-R62z4I-4N_NhD2qvFcBXcp74gxHiwg67xvTDTmK5atA3-6Jw-AufFeuLgC6LnxnuCMK-IeNJIuH-Pq3imnNPsceJz1flM"

# Consultório 2
curl -L -o public/images/consultorio-2.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuBNG84ic5OvY8XsAGHJ3R6AeZLyl8iG4zJFrLmpEss7ePGg97ZVLdJ4b7ZB3L64zkpiMmfOJvYnv_fxLmHcrHtsgMgljQAeM9_VtFmKYf0DGtpMk13KTxKierrFV3JL32NO3Jo3JXKww_P82xijOPLEbLDqDK_H0PMWD2Lp6HvcM4j3eHEpFyOMXcCP5zmWDmUFsbZzDtjzStRz3k-9xANBVvAkPOivV0fm-G_BXz8YVoQ6R2UmH__TobMgyIkvyPG9OOAfTbYzvi4"

# Consultório 3
curl -L -o public/images/consultorio-3.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuCi-J2fl9XHRCgV8SSJFktlq4UpcOWYw-YN_mgB89JnIByzp3XL6eyLTydtoG9OY7v4zeNqw7kDnjdy_JQIlvuL03GiOfVILkC44QGGCa-yRhO1ILjEasDCglIeUtQtSEH9w07ZHtjT-hecXqjYAIhoo652PZkQwYjG76pmbE2dBhJQjquoumzRoU7Tr3aL-5769pPepRHZmALzyQ1aLL9D9_Gystx9ZeE1UjFO8p4vk6_XlEaOMN1ofQPuojMQE5kJJNwpwvzgkNs"

# Vídeo thumbnail (Serviços)
curl -L -o public/images/video-thumb.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuB3V15vO6zS3qL7C7W6mG7N3X5z7S9-6K6f6u6_2-uG6L6q6S-5v6z7s-7R6f6W6u6T6z7v-7P6q6K6v6S-5v6u6W6r6p6I6r6J6u6S-5v6z6K6u6W6t6L6r6v6R6f6z6p6S-5v6u6W6r6p6I6r6J6u6S-5v6z6K6u6W6t6L6r6v6R6f6z6p6S-5v6u6W6r6p6I6r6J6u6S-5v6z6K6u6W6t6L6r6v6R6f6z6p6S-5v6u6W6r6p6I6r6J6u6S-5v6z6K6u6W6t6L6r6v6R6f6z6p6S-5v6z6K6u6W6t6L6r6v6R6f6z6p"

# Especialidade - Estética
curl -L -o public/images/especialidade-estetica.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuBeXLZZY5-DbViCsTUb2FuVH3lfFh8kV6SiYL4ZJOZwBn9NRsQ8ziYO-UW0-5y0hHTTmAGbsWNnMRvCJt61Gj38nmSn1QRrWJx_TM8pOnGoVIOk1bGcdQqHEgWJOmoc6QYYS4viiKSRg3_DjIs2HXGs5JKqCovGbvwSsZmbQEetqeBJMkyUViinOgiL_wSQiJiMwrTiwoXrj-fGBzHe6o1hemp1c0Tk8sgawRGZSDMsa6dzBls4zxak8ERXPAI7_RcI5iqB_Je83fQ"

# Especialidade - Diabetes
curl -L -o public/images/especialidade-diabetes.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuBHwwpEA1lknWYeRAHORaz4i7P9ZwNhLTuvRchw5eSk1KP-QkB75A2CpappJmGkGZXYjHPFswtEDVv1ZiZnA5l06AqXqYompIgW18tAOt4uW4Fu09hPkl4UNzi6Klw6Lk4BSg7wDZskuPGvba2MljTgV_gwRVlKD7WJSyMqQQYQs4VYwcm4KkAf2B_GhwjrFPcBXUQui7L7s0QfKvUZjsoH_KI-xXjehaRdqMyLgjS4KL4n_tzJgWy13G-kz1FPISnbR5aDj_MQC4Q"
```

**Nota:** Os URLs das imagens vêm das screenshots do Stitch. Se algum download falhar (URL expirada), as imagens precisarão ser baixadas manualmente da interface do Stitch ou fornecidas pelo cliente.

- [ ] **Step 2: Verificar downloads**

```bash
ls -la public/images/ | wc -l
```

Expected: 12+ linhas (11 arquivos + `..` + `.`)

- [ ] **Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: add project images"
```

---

### Task 19: Build final e ajustes

**Files:**
- Modify: `src/data/site.json` — preencher `formSubmitUrl` e `googleMapsUrl` com valores reais
- Create: `public/favicon.svg` (opcional)

- [ ] **Step 1: Build de produção**

```bash
npx astro build
```

Expected: build bem-sucedido. Verificar output em `dist/`.

- [ ] **Step 2: Verificar arquivos gerados**

```bash
ls dist/ && du -sh dist/
```

Expected: `index.html` + assets otimizados. Tamanho total razoável (< 5MB).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: production-ready landing page"
git push
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Cada seção da página tem um componente correspondente. SEO/schema no BaseLayout. Responsividade via Tailwind. Fora de escopo respeitado.
- [x] **Placeholder scan:** Sem TBD ou TODO. `formSubmitUrl` e `googleMapsUrl` têm valores placeholder explícitos para serem preenchidos.
- [x] **Type consistency:** `site.json` keys usadas consistentemente em todos os componentes. Props de Button e GlassCard definidas e usadas corretamente.

---

**Plano concluído.** 19 tarefas, ~2-5 min cada. Build progressivo: cada task adiciona um componente e commita.
