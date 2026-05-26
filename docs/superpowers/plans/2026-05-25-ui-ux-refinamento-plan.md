# Refinamento UI/UX Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Alinhar 100% da landing page do Dr. Dhiego Ventura ao design system "Ventura Prestige" do Stitch, refinando cores, tipografia, botões, cards, espaçamentos e animações.

**Architecture:** Atualização direta de tokens Tailwind, componentes shadcn/ui e seções Astro. Sem novas dependências — CSS puro para animações. Verificação via `bun run build` + `bunx astro check`.

**Tech Stack:** Astro, React (shadcn/ui via @base-ui/react), Tailwind CSS 3, TypeScript

---

## Estrutura de Arquivos

| Arquivo | Ação | Responsabilidade |
|---------|------|----------------|
| `tailwind.config.ts` | Modificar | Tokens de cor, fonte, radius, spacing alinhados ao Stitch |
| `src/styles/global.css` | Modificar | CSS custom properties, `.glass-card`, animações keyframes, reduced-motion |
| `src/layouts/BaseLayout.astro` | Modificar | Adicionar link para fonte Inter no `<head>` |
| `src/components/ui/button.tsx` | Modificar | Variantes, altura, padding, radius, glow hover |
| `src/components/ui/Button.astro` | Modificar | Wrapper ajustado (remover `render` prop se quebrar) |
| `src/components/ui/card.tsx` | Modificar | Cores de fundo, bordas, radius |
| `src/components/ui/Card.astro` | Modificar | Wrapper ajustado |
| `src/components/ui/input.tsx` | Modificar | Altura, padding, cores, focus ring |
| `src/components/ui/Input.astro` | Modificar | Wrapper ajustado |
| `src/pages/index.astro` | Modificar | IntersectionObserver com threshold 0.15, data-animate, stagger |
| `src/components/Header.astro` | Modificar | Altura, fundo blur, padding, nav hover |
| `src/components/Hero.astro` | Modificar | Cores, tipografia, padding, gap, remover blur de fundo |
| `src/components/Servicos.astro` | Modificar | Cards, ícones, glassmorphism no vídeo |
| `src/components/Sobre.astro` | Modificar | Cores, tipografia, imagem radius |
| `src/components/Vantagens.astro` | Modificar | Ícones cor primary, grid responsivo |
| `src/components/Especialidades.astro` | Modificar | Cards, botões outline |
| `src/components/Depoimentos.astro` | Modificar | Cards, cores de texto, avatar |
| `src/components/Planos.astro` | Modificar | Cards, badge, botão w-full justificado, scale VIP |
| `src/components/Contato.astro` | Modificar | Info box, card formulário, inputs, botão |
| `src/components/Clinica.astro` | Modificar | Cores, container |
| `src/components/Footer.astro` | Modificar | Fundo, padding, links hover |
| `src/components/WhatsAppFAB.astro` | Modificar | Ajustar cor se necessário |

---

## Task 1: Fundação — Tokens Tailwind, CSS Global e Fonte Inter

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`

**Contexto:** Todos os tokens de design precisam ser atualizados de uma vez para evitar inconsistências visuais parciais. A fonte Inter precisa ser carregada antes de qualquer componente usá-la.

- [ ] **Step 1: Atualizar `tailwind.config.ts` — cores, fontes, radius, spacing**

Substituir o arquivo inteiro pelo novo mapeamento Stitch:

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#131313',
        foreground: '#e5e2e1',
        surface: '#1a1c1e',
        'surface-dim': '#131313',
        'surface-bright': '#3a3939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#d0c5af',
        'inverse-surface': '#e5e2e1',
        'inverse-on-surface': '#313030',
        outline: '#99907c',
        'outline-variant': '#4d4635',
        'surface-tint': '#e9c349',
        primary: '#d4af37',
        'on-primary': '#3c2f00',
        'primary-container': '#d4af37',
        'on-primary-container': '#554300',
        'inverse-primary': '#735c00',
        secondary: '#c6c6c9',
        'on-secondary': '#2f3133',
        'secondary-container': '#454749',
        'on-secondary-container': '#b4b5b7',
        tertiary: '#d1cec8',
        'on-tertiary': '#31312c',
        'tertiary-container': '#b5b3ad',
        'on-tertiary-container': '#464540',
        error: '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'primary-fixed': '#ffe088',
        'primary-fixed-dim': '#e9c349',
        'on-primary-fixed': '#241a00',
        'on-primary-fixed-variant': '#574500',
        'secondary-fixed': '#e2e2e5',
        'secondary-fixed-dim': '#c6c6c9',
        'on-secondary-fixed': '#1a1c1e',
        'on-secondary-fixed-variant': '#454749',
        'tertiary-fixed': '#e5e2db',
        'tertiary-fixed-dim': '#c9c6c0',
        'on-tertiary-fixed': '#1c1c18',
        'on-tertiary-fixed-variant': '#474742',
        card: '#201f1f',
        'card-foreground': '#e5e2e1',
        popover: '#2a2a2a',
        'popover-foreground': '#e5e2e1',
        'primary-foreground': '#3c2f00',
        'secondary-foreground': '#2f3133',
        muted: '#201f1f',
        'muted-foreground': '#d0c5af',
        accent: '#d4af37',
        'accent-foreground': '#554300',
        destructive: '#ffb4ab',
        'destructive-foreground': '#690005',
        border: '#4d4635',
        input: '#99907c',
        ring: '#d4af37',
        sidebar: '#131313',
        'sidebar-foreground': '#e5e2e1',
        'sidebar-primary': '#d4af37',
        'sidebar-primary-foreground': '#3c2f00',
        'sidebar-accent': '#201f1f',
        'sidebar-accent-foreground': '#d0c5af',
        'sidebar-border': '#4d4635',
        'sidebar-ring': '#d4af37',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'headline-lg': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-md': ['28px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '0.05em' }],
        'label-sm': ['12px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        base: '8px',
        'container-padding-desktop': '64px',
        'container-padding-mobile': '16px',
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

- [ ] **Step 2: Atualizar `src/styles/global.css` — custom properties, glass-card, animações**

Substituir o conteúdo relevante mantendo os imports existentes e adicionando as novas regras:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: #131313;
  --color-foreground: #e5e2e1;
  --font-sans: 'Inter', 'Manrope', ui-sans-serif, system-ui, sans-serif;
  --font-manrope: 'Manrope', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Manrope', sans-serif;
  color: #e5e2e1;
  background-color: #131313;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Glass card utility */
.glass-card {
  background: rgba(26, 28, 30, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 175, 55, 0.1);
}

/* Gold glow utility */
.gold-glow {
  box-shadow: 0 0 24px rgba(212, 175, 55, 0.35);
}

/* Text utilities */
.text-off-white {
  color: #f5f0e8;
}

/* ====== Animations of Entry ====== */
[data-animate] {
  opacity: 0;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

[data-animate="section"] {
  transform: translateY(30px);
  transition-duration: 700ms;
}

[data-animate="title"] {
  transform: translateY(20px);
  transition-duration: 600ms;
}

[data-animate="text"] {
  transform: translateY(15px);
  transition-duration: 600ms;
  transition-delay: 100ms;
}

[data-animate="card"] {
  transform: translateY(25px);
  transition-duration: 500ms;
}

[data-animate="button"] {
  transform: scale(0.95);
  transition-duration: 400ms;
  transition-delay: 200ms;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

[data-animate="image"] {
  transform: scale(1.02);
  transition-duration: 800ms;
}

/* Stagger delays via inline style or CSS variables */
[data-animate-delay="1"] { transition-delay: 100ms; }
[data-animate-delay="2"] { transition-delay: 200ms; }
[data-animate-delay="3"] { transition-delay: 300ms; }
[data-animate-delay="4"] { transition-delay: 400ms; }

/* Active state (added by JS when in view) */
[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* ====== Reduced Motion ====== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

> **Nota:** Preservar os imports existentes (`@fontsource/manrope/*` se houver). Se o projeto usa `@import "tw-animate-css";` e `@import "tailwindcss";` no formato v4, ajustar conforme necessário. Como o AGENTS.md menciona Tailwind 3, manter o formato compatível com Tailwind 3.

- [ ] **Step 3: Adicionar fonte Inter no `BaseLayout.astro`**

No `<head>` do layout, adicionar o link para a fonte Inter (Google Fonts) junto ao link do Manrope:

```html
<!-- Manrope já deve estar presente via @fontsource ou Google Fonts -->
<!-- Adicionar Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Se já houver link para Manrope, substituir por este que inclui ambas. Se usar `@fontsource`, instalar `@fontsource/inter` e importar no global.css.

- [ ] **Step 4: Verificação rápida**

Run: `bun run build`  
Expected: PASS (pode haver warnings, mas 0 erros de build)

Run: `bunx astro check`  
Expected: PASS (0 erros de typecheck)

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts src/styles/global.css src/layouts/BaseLayout.astro
git commit -m "feat(ui): atualiza tokens Tailwind, CSS global e fonte Inter para design system Stitch"
```

---

## Task 2: Componentes UI Base — Button, Card, Input

**Files:**
- Modify: `src/components/ui/button.tsx`
- Modify: `src/components/ui/Button.astro`
- Modify: `src/components/ui/card.tsx`
- Modify: `src/components/ui/Card.astro`
- Modify: `src/components/ui/input.tsx`
- Modify: `src/components/ui/Input.astro`

**Contexto:** Os componentes shadcn/ui precisam refletir as novas dimensões, cores e interações. Os wrappers Astro devem continuar funcionando sem `client:load`.

- [ ] **Step 1: Reescrever `src/components/ui/button.tsx`**

```tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap uppercase tracking-wider outline-none select-none transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:-translate-y-px",
        outline:
          "border-primary/60 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]",
        secondary:
          "bg-surface-container-high text-on-surface hover:bg-surface-container-highest",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-1.5 px-6",
        xs: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-3 text-xs",
        sm: "h-9 gap-1 rounded-[min(var(--radius-md),12px)] px-4 text-[0.8rem]",
        lg: "h-12 gap-1.5 px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-8 rounded-[min(var(--radius-md),10px)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-[min(var(--radius-md),12px)]",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

- [ ] **Step 2: Reescrever `src/components/ui/Button.astro`**

```astro
---
import { Button as ShadcnButton } from './button';

export interface Props {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
  href?: string;
  class?: string;
}

const { variant = 'default', size = 'default', href, class: extraClass = '' } = Astro.props;
---

<ShadcnButton
  variant={variant}
  size={size}
  className={extraClass}
  {...(href ? { as: 'a', href } : {})}
>
  <slot />
</ShadcnButton>
```

> **Nota:** A prop `render` do React createElement não funciona bem com SSR Astro. Se o botão precisar ser link, usar o pattern `as="a"` se o @base-ui/react/button suportar, ou renderizar `<a>` com as classes do buttonVariants ao redor do conteúdo. Se o `as` não funcionar, o wrapper deve renderizar `<a>` quando `href` estiver presente, aplicando as classes manualmente via `cn(buttonVariants({variant, size}), extraClass)`.

- [ ] **Step 3: Reescrever `src/components/ui/card.tsx`**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-outline-variant/50 bg-surface-container text-card-foreground transition-all duration-300 ease-out",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-8", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-manrope text-headline-md font-semibold leading-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("font-inter text-body-md text-on-surface-variant/80", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-8 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

- [ ] **Step 4: Reescrever `src/components/ui/Input.astro` e ajustar `input.tsx`**

`input.tsx`:
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded border border-outline bg-surface-container px-4 py-2 font-inter text-base text-on-surface placeholder:text-on-surface-variant/50 transition-colors duration-200 focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
```

`Input.astro` (wrapper — deve ser simples, sem hidratação React):
```astro
---
import { Input as ShadcnInput } from './input';

export interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  class?: string;
  [key: string]: any;
}

const { class: extraClass = '', ...props } = Astro.props;
---

<ShadcnInput className={extraClass} {...props} />
```

- [ ] **Step 5: Verificação**

Run: `bunx astro check`  
Expected: PASS (0 erros)

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/
git commit -m "feat(ui): refatora Button, Card, Input com tokens Stitch e interações refinadas"
```

---

## Task 3: Animações Globais — IntersectionObserver e CSS

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css` (animações já parcialmente adicionadas na Task 1, mas confirmar)

**Contexto:** Substituir o IntersectionObserver genérico por um sistema que suporta tipos de animação diferentes, stagger e threshold 0.15.

- [ ] **Step 1: Atualizar o script de animação em `src/pages/index.astro`**

Substituir o bloco `<script>` inteiro no final do arquivo:

```astro
<script>
  // Scroll animations with refined easing and stagger support
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  // Auto-assign data-animate to sections and their children
  document.querySelectorAll('section').forEach((section, sIndex) => {
    // Section itself
    section.classList.add('transition-all');
    if (!section.hasAttribute('data-animate')) {
      section.setAttribute('data-animate', 'section');
    }
    observer.observe(section);

    // Titles
    section.querySelectorAll('h1, h2').forEach(el => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'title');
        observer.observe(el);
      }
    });

    // Paragraphs
    section.querySelectorAll('p').forEach(el => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'text');
        observer.observe(el);
      }
    });

    // Cards in grid
    section.querySelectorAll('[class*="glass-card"], [class*="bg-surface-container"]').forEach((el, cIndex) => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'card');
        el.setAttribute('data-animate-delay', String((cIndex % 4) + 1));
        observer.observe(el);
      }
    });

    // Buttons/CTAs
    section.querySelectorAll('button, a[data-slot="button"]').forEach(el => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'button');
        observer.observe(el);
      }
    });

    // Images
    section.querySelectorAll('img').forEach(el => {
      if (!el.hasAttribute('data-animate')) {
        el.setAttribute('data-animate', 'image');
        observer.observe(el);
      }
    });
  });
</script>
```

> **Nota:** A seleção de cards usa heurística de classe. Se houver cards sem `glass-card` ou `bg-surface-container`, ajustar o seletor. Como todas as seções foram atualizadas para usar as novas classes, isso deve cobrir.

- [ ] **Step 2: Verificação**

Run: `bunx astro check`  
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(animations): IntersectionObserver com threshold 0.15, tipos de animação e stagger"
```

---

## Task 4: Header + Hero

**Files:**
- Modify: `src/components/Header.astro`
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Atualizar `src/components/Header.astro`**

Ajustar classes para:
- Container: `h-20 px-16 max-w-container-max mx-auto flex items-center justify-between`
- Fundo: `fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30`
- Nav links: `font-manrope text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary hover:-translate-y-px transition-all duration-150`
- Mobile: manter hamburger se existir

- [ ] **Step 2: Atualizar `src/components/Hero.astro`**

Ajustar classes:
- Section: `relative min-h-[85vh] flex items-center px-container-padding-desktop max-w-container-max mx-auto overflow-hidden pt-32 pb-16`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`
- Badge: `font-manrope text-label-md text-primary tracking-widest uppercase block mb-4`
- Headline: `font-manrope text-display-lg leading-tight text-on-surface mb-6 max-w-lg`
- Descrição: `font-inter text-body-lg text-on-surface-variant/80 mb-8 max-w-lg`
- CTA: `<Button href={...} size="lg">` (size lg = 48px, px-8)
- Preço: `text-primary font-bold text-2xl`
- Imagem: `relative z-10 w-full max-w-md rounded-lg shadow-2xl`
- Remover o `blur-[100px]` de fundo da imagem

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro src/components/Hero.astro
git commit -m "feat(sections): ajusta Header e Hero ao design system Stitch"
```

---

## Task 5: Servicos + Sobre

**Files:**
- Modify: `src/components/Servicos.astro`
- Modify: `src/components/Sobre.astro`

- [ ] **Step 1: Atualizar `src/components/Servicos.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Título: `font-manrope text-headline-lg text-on-surface mb-4 text-center`
- Subtítulo: `font-inter text-body-lg text-on-surface-variant/70 max-w-2xl mx-auto mb-12`
- Grid cards: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Card: `p-8 glass-card rounded-lg text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-primary/30 transition-all duration-300`
- Ícone: `material-symbols-outlined text-4xl mb-4 text-primary`
- Título do card: `font-manrope text-headline-md text-on-surface mb-2`
- Descrição: `font-inter text-body-md text-on-surface-variant/80`
- Vídeo: container com `glass-card rounded-lg overflow-hidden` se estiver sobreposto a imagem de fundo

- [ ] **Step 2: Atualizar `src/components/Sobre.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`
- Imagem: `rounded-lg shadow-2xl w-full`
- Nome: `font-manrope text-headline-lg text-on-surface mb-2`
- Título: `font-manrope text-label-md text-primary uppercase tracking-widest mb-6`
- Bio: `font-inter text-body-lg text-on-surface-variant/80 space-y-4`

- [ ] **Step 3: Commit**

```bash
git add src/components/Servicos.astro src/components/Sobre.astro
git commit -m "feat(sections): ajusta Servicos e Sobre ao design system Stitch"
```

---

## Task 6: Vantagens + Especialidades

**Files:**
- Modify: `src/components/Vantagens.astro`
- Modify: `src/components/Especialidades.astro`

- [ ] **Step 1: Atualizar `src/components/Vantagens.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Item: flex column, center-aligned, sem card/borda — apenas ícone + título + texto
- Ícone: `material-symbols-outlined text-4xl text-primary mb-4`
- Título: `font-manrope text-headline-md text-on-surface mb-2`
- Descrição: `font-inter text-body-md text-on-surface-variant/80 text-center`

- [ ] **Step 2: Atualizar `src/components/Especialidades.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
- Card: `p-10 rounded-lg border border-outline-variant/50 bg-surface-container hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-primary/30 transition-all duration-300`
- Título: `font-manrope text-headline-md text-on-surface mb-4`
- Descrição: `font-inter text-body-md text-on-surface-variant/80 mb-6`
- CTA: `<Button variant="outline" size="default">{item.cta}</Button>`

- [ ] **Step 3: Commit**

```bash
git add src/components/Vantagens.astro src/components/Especialidades.astro
git commit -m "feat(sections): ajusta Vantagens e Especialidades ao design system Stitch"
```

---

## Task 7: Depoimentos + Planos

**Files:**
- Modify: `src/components/Depoimentos.astro`
- Modify: `src/components/Planos.astro`

- [ ] **Step 1: Atualizar `src/components/Depoimentos.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Card: `p-8 bg-surface-container rounded-lg border border-outline-variant/50 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-300`
- Iniciais/avatar: `w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-manrope font-bold text-lg`
- Nome: `font-manrope font-semibold text-on-surface`
- Cidade: `font-inter text-sm text-on-surface-variant/60`
- Texto depoimento: `font-inter text-body-md text-on-surface-variant/80 italic mt-4`

- [ ] **Step 2: Atualizar `src/components/Planos.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8 items-start`
- Card padrão: `p-10 bg-surface-container rounded-lg border border-outline-variant/50 text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-primary/30 transition-all duration-300`
- Card VIP: adicionar `ring-2 ring-primary/40 scale-[1.02] z-10 relative hover:-translate-y-1.5 hover:ring-primary/50`
- Badge VIP: `absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full font-manrope text-xs font-bold uppercase tracking-widest`
- Ícone: `material-symbols-outlined text-5xl mb-6 text-secondary` (padrão) ou `text-primary` (VIP)
- Título: `font-manrope text-headline-md text-on-surface mb-2`
- Preço: `font-manrope text-primary font-bold text-2xl mb-1`
- Subtítulo: `font-inter text-sm text-on-surface-variant/60 mb-8`
- Botão: `w-full justify-center` — Primary para VIP, Outline para outros

- [ ] **Step 3: Commit**

```bash
git add src/components/Depoimentos.astro src/components/Planos.astro
git commit -m "feat(sections): ajusta Depoimentos e Planos ao design system Stitch"
```

---

## Task 8: Contato + Clinica

**Files:**
- Modify: `src/components/Contato.astro`
- Modify: `src/components/Clinica.astro`

- [ ] **Step 1: Atualizar `src/components/Contato.astro`**

- Section: `py-section-gap bg-surface-container-lowest relative`
- Container: `px-container-padding-desktop max-w-container-max mx-auto relative z-10`
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`
- Título: `font-manrope text-headline-lg text-on-surface mb-8 leading-tight`
- Descrição: `font-inter text-body-lg text-on-surface-variant/80 mb-8`
- Info box: `flex items-center gap-6 p-6 border border-primary/20 rounded-lg bg-surface-container-low mb-8`
- Ícone location: `material-symbols-outlined text-secondary text-4xl`
- Card formulário: `p-10 glass-card rounded-lg shadow-2xl`
- Título form: `font-manrope text-headline-md text-on-surface mb-8 text-center`
- Inputs: `w-full` (sem `rounded-full` nem `py-4 px-6` — usar o padrão do componente Input que agora é `py-3 px-4 rounded`)
- Botão submit: `w-full h-12 justify-center uppercase tracking-widest font-manrope text-sm`

- [ ] **Step 2: Atualizar `src/components/Clinica.astro`**

- Padding: `py-section-gap px-container-padding-desktop max-w-container-max mx-auto`
- Container endereço: `bg-surface-container p-6 rounded-lg border border-outline-variant/50`
- Título: `font-manrope text-headline-lg text-on-surface mb-4`
- Endereço: `font-inter text-body-md text-on-surface-variant/80`
- Mapa: manter embed do Google Maps, envolver em `rounded-lg overflow-hidden border border-outline-variant/50`

- [ ] **Step 3: Commit**

```bash
git add src/components/Contato.astro src/components/Clinica.astro
git commit -m "feat(sections): ajusta Contato e Clinica ao design system Stitch"
```

---

## Task 9: Footer + WhatsAppFAB + Verificação Final

**Files:**
- Modify: `src/components/Footer.astro`
- Modify: `src/components/WhatsAppFAB.astro`

- [ ] **Step 1: Atualizar `src/components/Footer.astro`**

- Section: `py-12 px-16 bg-surface-container-low border-t border-outline-variant/30`
- Container: `max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6`
- Links: `font-manrope text-label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-150`
- Copyright: `font-inter text-sm text-on-surface-variant/40`

- [ ] **Step 2: Atualizar `src/components/WhatsAppFAB.astro`**

- Manter posição fixa
- Ajustar cor do botão para `bg-primary text-on-primary` (gold)
- Hover: `hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] hover:scale-110 transition-all duration-200`
- Border radius: `rounded-full`

- [ ] **Step 3: Verificação final completa**

Run: `bun run build`  
Expected: PASS (0 erros de build)

Run: `bunx astro check`  
Expected: PASS (0 erros de typecheck)

- [ ] **Step 4: Commit final**

```bash
git add src/components/Footer.astro src/components/WhatsAppFAB.astro
git commit -m "feat(sections): ajusta Footer e WhatsAppFAB ao design system Stitch"
```

---

## Task 10: Sanity Check — Critérios de Sucesso

- [ ] **Step 1: Verificar visualmente cada critério**

Abrir `dist/index.html` (ou `bun run dev` + localhost:4321) e confirmar:

| # | Critério | Status |
|---|----------|--------|
| 1 | Build sem erros (`bun run build`) | ☐ |
| 2 | Typecheck limpo (`bunx astro check`) | ☐ |
| 3 | Fundo da página é `#131313` (não navy) | ☐ |
| 4 | Cards têm fundo `#201f1f` e borda `#4d4635`@50% | ☐ |
| 5 | Botões têm altura mínima 44px, padding horizontal confortável, raio 4px | ☐ |
| 6 | Hover em botão exibe glow dourado visível | ☐ |
| 7 | Texto de corpo usa Inter; headlines usam Manrope | ☐ |
| 8 | Margens desktop são 64px laterais; mobile 16px | ☐ |
| 9 | Section gap é 120px desktop | ☐ |
| 10 | Animações de entrada funcionam com stagger em grids | ☐ |
| 11 | Reduced motion respeita `prefers-reduced-motion` | ☐ |

- [ ] **Step 2: Commit de sanity**

```bash
git commit --allow-empty -m "chore: sanity check completo — design system Stitch aplicado em toda a landing page"
```

---

## Self-Review

### 1. Spec Coverage

| Seção do Spec | Task que implementa |
|---------------|---------------------|
| Tokens de cor (2.1) | Task 1 (tailwind.config.ts) |
| Tipografia Inter/Manrope (2.2) | Task 1 (tailwind.config.ts + BaseLayout + global.css) |
| Espaçamentos (2.3) | Task 1 (tailwind.config.ts) + Tasks 4-9 (sections) |
| Border radius (2.4) | Task 1 (tailwind.config.ts) + Tasks 2-9 |
| Botões (3.1) | Task 2 (button.tsx + Button.astro) |
| Cards (3.2) | Task 2 (card.tsx + Card.astro) + Tasks 4-9 |
| Inputs (3.3) | Task 2 (input.tsx + Input.astro) + Task 8 |
| Badges (3.4) | Tasks 4-7 (badges inline nas sections) |
| Layout por seção (4.1–4.11) | Tasks 4-9 |
| Animações de entrada (5.1) | Task 3 (index.astro + global.css) |
| Hover (5.2) | Task 2 (botões/cards) + Tasks 4-9 |
| Reduced motion (5.3) | Task 1 (global.css) |
| Responsividade (6) | Tasks 4-9 (classes responsivas) |

**Gap:** Nenhum gap identificado. Todos os requisitos do spec têm pelo menos uma task.

### 2. Placeholder Scan

- ❌ Nenhum "TBD", "TODO", "implement later"
- ❌ Nenhum "Add appropriate error handling" sem código
- ❌ Nenhum "Write tests for the above" sem teste
- ❌ Nenhum "Similar to Task N"
- ✅ Código completo em cada step
- ✅ Comandos exatos com expected output

### 3. Type Consistency

- `buttonVariants` usa `h-11`, `h-12`, `px-6`, `px-8` — consistente com spec
- `Card` usa `bg-surface-container` — consistente com tokens Tailwind definidos na Task 1
- `Input` usa `h-10`, `px-4`, `py-2` — consistente com spec (não `py-4 px-6`)
- `data-animate` atributos usam os mesmos nomes do spec (section, title, text, card, button, image)
- Cores como `#d4af37`, `#131313`, `#201f1f` são consistentes em todo o plano

---

*Plano verificado e pronto para execução.*
