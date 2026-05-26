# Design Spec: Refinamento UI/UX — Alinhamento ao Design System Stitch "Ventura Prestige"

**Data:** 2026-05-25  
**Escopo:** Landing page única (`index.astro`) — 11 seções  
**Referência:** Stitch project `5614520382895616111` — Design System "Ventura Prestige"

---

## 1. Contexto e Objetivo

A landing page atual desviou-se do design system definido no Stitch. Os principais problemas são:

- Botões achatados (`h-8`/`h-9` com `w-full`) em vez de altura generosa e padding confortável
- Paleta de cores navy (`#071325`) em vez do preto-charcoal do Stitch (`#131313`)
- Fonte Manrope usada em todo o texto, sem a separação headline/body do Stitch
- Espaçamentos inconsistentes e margens laterais pequenas (40px vs. 64px do Stitch)
- Animações genéricas sem stagger, glow, ou easing refinado
- Ausência do conceito de glassmorphism e tonal layers definidos no Stitch

**Objetivo:** Alinhar 100% da landing page ao design system "Ventura Prestige" do Stitch, elevando o polimento visual para o nível "Scientific Luxury".

---

## 2. Design Tokens

### 2.1 Cores

Substituir toda a paleta Tailwind pelo mapeamento Stitch:

| Token Tailwind | Valor HEX | Uso |
|----------------|-----------|-----|
| `background` | `#131313` | Fundo da página |
| `surface` | `#1a1c1e` | Superfície base de cards |
| `surface-container-lowest` | `#0e0e0e` | Elementos mais profundos |
| `surface-container-low` | `#1c1b1b` | Containers secundários |
| `surface-container` | `#201f1f` | Cards padrão |
| `surface-container-high` | `#2a2a2a` | Hover de cards |
| `surface-container-highest` | `#353534` | Destaques de superfície |
| `primary` | `#d4af37` | Gold — CTAs, badges, destaques |
| `on-primary` | `#3c2f00` | Texto sobre gold |
| `secondary` | `#c6c6c9` | Cinza claro — ícones, labels secundários |
| `on-secondary` | `#2f3133` | Texto sobre secondary |
| `tertiary` | `#d1cec8` | Champagne — detalhes sutis |
| `on-surface` | `#e5e2e1` | Texto primário (quente) |
| `on-surface-variant` | `#d0c5af` | Texto secundário (champagne) |
| `outline` | `#99907c` | Bordas inativas |
| `outline-variant` | `#4d4635` | Bordas sutis de cards |
| `ring` | `#d4af37` | Focus rings |

> **Nota:** O navy (`#071325`) e todas as variantes azuladas são removidos. Não há fallback.

### 2.2 Tipografia

| Token | Fonte | Tamanho | Weight | Line-height | Letter-spacing |
|-------|-------|---------|--------|-------------|----------------|
| `display-lg` | Manrope | 56px | 700 | 1.1 | -0.02em |
| `headline-lg` | Manrope | 40px | 600 | 1.2 | normal |
| `headline-md` | Manrope | 28px | 500 | 1.3 | normal |
| `body-lg` | **Inter** | 18px | 400 | 1.6 | normal |
| `body-md` | **Inter** | 16px | 400 | 1.6 | normal |
| `label-md` | Manrope | 14px | 600 | 1.2 | 0.05em |
| `label-sm` | Manrope | 12px | 600 | 1.2 | 0.05em |

**Regras:**
- Manrope **exclusivamente** em headlines e labels
- Inter **exclusivamente** em body text (parágrafos, descrições, inputs)
- Labels sempre uppercase

### 2.3 Espaçamentos

| Token | Valor | Uso |
|-------|-------|-----|
| `container-padding-desktop` | 64px (`px-16`) | Margem lateral desktop |
| `container-padding-mobile` | 16px (`px-4`) | Margem lateral mobile |
| `section-gap` | 120px (`py-30`) | Espaçamento vertical entre seções |
| `gutter` | 24px (`gap-6`) | Gap entre colunas/cards |
| `stack-sm` | 12px (`gap-3`) | Espaço pequeno entre elementos |
| `stack-md` | 24px (`gap-6`) | Espaço médio |
| `stack-lg` | 48px (`gap-12`) | Espaço grande |
| `container-max` | 1280px | Largura máxima do container |

### 2.4 Formas (Border Radius)

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded` | 4px | Botões |
| `rounded-md` | 6px | Inputs pequenos |
| `rounded-lg` | 8px | Cards |
| `rounded-xl` | 12px | Cards destacados |
| `rounded-full` | 9999px | Badges, pills |

> **Nota:** O raio de 16px (`rounded-lg` Tailwind padrão no config antigo) é eliminado. Cards usam 8px.

---

## 3. Componentes

### 3.1 Botões

**Dimensões:**
- Altura mínima: `h-11` (44px) padrão; `h-12` (48px) para CTA grande
- Padding horizontal: `px-6` (24px) mínimo; `px-8` (32px) para CTA
- Largura: `min-w-[160px]` para CTAs; nunca `w-full` a menos que o contexto exija (ex: card de plano)
- Border radius: `rounded` (4px)

**Variantes:**

| Variante | Classes (exemplo Tailwind) |
|----------|---------------------------|
| Primary | `bg-primary text-on-primary h-11 px-6 rounded font-manrope text-sm font-semibold uppercase tracking-wider hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:-translate-y-px active:translate-y-px transition-all duration-200 ease-out` |
| Outline | `border border-primary/60 text-primary bg-transparent h-11 px-6 rounded font-manrope text-sm font-semibold uppercase tracking-wider hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_16px_rgba(212,175,55,0.2)] active:translate-y-px transition-all duration-200 ease-out` |
| Secondary | `bg-surface-container-high text-on-surface h-11 px-6 rounded font-manrope text-sm font-semibold uppercase tracking-wider hover:bg-surface-container-highest active:translate-y-px transition-all duration-200 ease-out` |

**Focus:**
- `focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background`

**Disabled:**
- `opacity-40 pointer-events-none` (não `opacity-50`)

**Ícones internos:**
- Setas ganham `translate-x-1` no hover do botão pai (`group-hover/button:translate-x-1`)

### 3.2 Cards

**Padrão:**
- Fundo: `bg-surface-container` (#201f1f)
- Borda: `border border-outline-variant/50` (#4d4635 @ 50%)
- Border radius: `rounded-lg` (8px)
- Padding: `p-8` (32px) padrão; `p-10` (40px) para destaque

**Destaque (VIP, Serviço Principal):**
- Adicionar: `ring-2 ring-primary/40`
- Badge flutuante: `absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest`

**Glassmorphism (sobreposição em imagens):**
- `bg-surface/75 backdrop-blur-md border border-primary/10 rounded-lg`
- Usado APENAS em overlays (Hero, vídeo de serviços), nunca como fundo padrão de card

**Hover:**
- `hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-primary/30 transition-all duration-300 ease-out`
- Card VIP: adicionar `hover:ring-primary/50` no hover

### 3.3 Inputs

- Fundo: `bg-surface-container` (#201f1f)
- Borda: `border border-outline` (#99907c)
- Border radius: `rounded` (4px)
- Padding: `py-3 px-4` (não `py-4 px-6` — inputs devem ser proporcionais aos botões, não maiores)
- Texto: Inter, 16px
- Placeholder: `text-on-surface-variant/50`
- **Focus:** `border-primary ring-1 ring-primary/30`
- **Label:** Manrope 14px 600 uppercase tracking-wider, posicionado acima do input com `mb-2`

### 3.4 Badges / Chips

- Fundo: `bg-primary/15`
- Texto: `text-primary`
- Border radius: `rounded-full`
- Padding: `px-3 py-1`
- Fonte: Manrope 12px 600 uppercase tracking-widest

---

## 4. Layout por Seção

### 4.1 Header
- Altura: `h-20` (80px)
- Fundo: `bg-background/90 backdrop-blur-md` (fixo no topo, com transparência ao scroll)
- Padding lateral: `px-16` desktop; `px-4` mobile
- Logo: esquerda
- Nav links: direita, Manrope 14px 600, uppercase, tracking-wider
- Link hover: `text-primary hover:-translate-y-px transition-all duration-150`

### 4.2 Hero
- Padding superior: `pt-32` (128px) — antes era `pt-24`
- Padding inferior: `pb-16` (64px) — para não grudar na próxima seção
- Grid: 2 colunas desktop, gap `gap-16` (64px)
- Badge: Manrope 14px, uppercase, tracking-widest, `text-primary`
- Headline: `display-lg` (Manrope 56px)
- Descrição: `body-lg` (Inter 18px), `text-on-surface-variant/80`
- CTA: botão Primary `h-12 px-8` com ícone arrow
- Preço: `text-primary text-2xl font-bold` + label secundário
- Imagem: `rounded-lg` (8px), `shadow-2xl`, sem blur de fundo — remover o `blur-[100px]` atual

### 4.3 Serviços
- Título: `headline-lg`
- Grid de cards: 3 colunas desktop, `gap-6`
- Cards: `p-8`, ícone Material em `text-secondary` (ou `text-primary` para o principal)
- Vídeo institucional: em container com glassmorphism se estiver sobreposto a imagem

### 4.4 Sobre
- Grid 2 colunas (imagem + texto), `gap-16`
- Imagem: `rounded-lg` (8px)
- Texto: `body-lg` Inter, `text-on-surface-variant/80`

### 4.5 Vantagens
- Grid 4 colunas desktop, 2 tablet, 1 mobile
- Cards: sem borda, apenas ícone + título + descrição
- Ícone: `text-primary text-4xl`
- Título: `headline-md`
- Descrição: `body-md` Inter

### 4.6 Especialidades
- 2 cards lado a lado, `gap-6`
- Card: `p-10`, `rounded-lg`, `border-outline-variant/50`
- CTA: botão Outline

### 4.7 Depoimentos
- Grid ou carrossel (manter grid atual se não houver carrossel)
- Cards: `p-8`, `bg-surface-container`, `rounded-lg`
- Avatar/iniciais: círculo `bg-primary/20 text-primary`
- Nome: `font-semibold text-off-white` → mudar para `text-on-surface`
- Cidade: `text-on-surface-variant/60`
- Texto: `body-md` Inter, `text-on-surface-variant/80`, italic

### 4.8 Planos
- 3 cards, grid `md:grid-cols-3`
- Card padrão: `p-10`, `glass-card` (remover se não estiver usando backdrop-blur; manter se for sobre imagem)
- Card VIP: `ring-2 ring-primary/40 scale-[1.02] z-10`, badge "RECOMENDADO"
- Preço: `text-primary text-2xl font-bold`
- Botão: `w-full` apenas aqui (contexto justifica), Primary para VIP, Outline para outros

### 4.9 Contato
- Grid 2 colunas: info (esq) + formulário (dir), `gap-20`
- Info box (endereço): `p-6 border border-primary/20 rounded-lg bg-surface-container-low`
- Formulário card: `p-10 glass-card rounded-lg` (se sobreposto a algo; senão, `bg-surface-container`)
- Inputs: ajustar padding para `py-3 px-4` (não `py-4 px-6`)
- Botão submit: `w-full h-12 uppercase tracking-widest`

### 4.10 Clínica
- Endereço + mapa
- Container do endereço: `bg-surface-container p-6 rounded-lg`

### 4.11 Footer
- Padding: `py-12 px-16`
- Fundo: `bg-surface-container-low`
- Links: Manrope 14px, `text-on-surface-variant/60`, hover `text-primary`
- Copyright: `text-on-surface-variant/40 text-sm`

---

## 5. Animações

### 5.1 Entrada (Scroll-triggered via IntersectionObserver)

| Tipo | Efeito | Duração | Delay | Easing |
|------|--------|---------|-------|--------|
| Seção | `opacity 0→1`, `translateY(30px)→0` | 700ms | 0ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Título (h1, h2) | `opacity 0→1`, `translateY(20px)→0` | 600ms | 0ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Subtítulo/parágrafo | `opacity 0→1`, `translateY(15px)→0` | 600ms | 100ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Cards em grid | `opacity 0→1`, `translateY(25px)→0` | 500ms | stagger 100ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Botões/CTAs | `opacity 0→1`, `scale(0.95)→scale(1)` | 400ms | 200ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Imagens | `opacity 0→1`, `scale(1.02)→scale(1)` | 800ms | 0ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |

**Implementação:** Atributos `data-animate="type"` + IntersectionObserver com threshold 0.15. Stagger via CSS `transition-delay` calculado com `calc(var(--index) * 100ms)` ou atributo `data-delay`.

### 5.2 Hover

| Elemento | Efeito | Duração |
|----------|--------|---------|
| Botão Primary | `box-shadow: 0 0 24px rgba(212,175,55,0.35)`, `translateY(-1px)` | 200ms |
| Botão Outline | `bg-primary/10`, `border-primary`, glow leve | 200ms |
| Card padrão | `translateY(-4px)`, `shadow-[0_12px_32px_rgba(0,0,0,0.3)]`, `border-primary/30` | 300ms |
| Card VIP | `translateY(-6px)`, `ring-primary/50` | 300ms |
| Nav link | `text-primary`, `translateY(-1px)` | 150ms |
| Ícones em listas | `text-primary` | 150ms |

### 5.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Responsividade

| Breakpoint | Container Padding | Section Gap | Grid Vantagens | Grid Planos |
|------------|-------------------|-------------|----------------|-------------|
| Desktop (≥1024px) | 64px (`px-16`) | 120px (`py-30`) | 4 colunas | 3 colunas |
| Tablet (768–1023px) | 32px (`px-8`) | 80px (`py-20`) | 2 colunas | 2 colunas (VIP embaixo) |
| Mobile (<768px) | 16px (`px-4`) | 64px (`py-16`) | 1 coluna | 1 coluna |

- Hero: 1 coluna empilhada no mobile, imagem acima do texto
- Header: hamburger menu no mobile (se ainda não existir, adicionar)
- Fonte display: reduzir de 56px para 40px no mobile (`display-lg-mobile`)
- Margem lateral do header deve espelhar o container padding

---

## 7. Arquivos a Serem Modificados

| Arquivo | Alterações |
|---------|-----------|
| `tailwind.config.ts` | Atualizar todas as cores para mapeamento Stitch; adicionar fonte Inter; ajustar borderRadius (sm→4px, DEFAULT→4px, md→6px, lg→8px, xl→12px); ajustar spacing (container-padding-desktop→64px) |
| `src/styles/global.css` | Atualizar CSS custom properties; ajustar `.glass-card`; adicionar animações de entrada; adicionar reduced-motion; importar fonte Inter |
| `src/data/site.json` | Atualizar textos se necessário (não esperado) |
| `src/components/ui/button.tsx` | Altura, padding, radius, variantes, glow hover |
| `src/components/ui/Button.astro` | Possivelmente remover se wrapper não for mais necessário; ou ajustar props |
| `src/components/ui/card.tsx` | Cores de fundo, bordas, radius |
| `src/components/ui/Card.astro` | Ajustar wrapper |
| `src/components/ui/input.tsx` | Altura, padding, cores, focus ring |
| `src/components/ui/Input.astro` | Ajustar wrapper |
| `src/components/Header.astro` | Altura, fundo blur, padding, nav hover |
| `src/components/Hero.astro` | Cores, tipografia, padding, gap, remover blur de fundo |
| `src/components/Servicos.astro` | Cards, ícones, glassmorphism no vídeo |
| `src/components/Sobre.astro` | Cores, tipografia, imagem radius |
| `src/components/Vantagens.astro` | Ícones cor primary, grid responsivo |
| `src/components/Especialidades.astro` | Cards, botões outline |
| `src/components/Depoimentos.astro` | Cards, cores de texto, avatar |
| `src/components/Planos.astro` | Cards, badge, botão w-full justificado, scale VIP |
| `src/components/Contato.astro` | Info box, card formulário, inputs, botão |
| `src/components/Clinica.astro` | Cores, container |
| `src/components/Footer.astro` | Fundo, padding, links hover |
| `src/components/WhatsAppFAB.astro` | Ajustar cor se necessário |
| `src/pages/index.astro` | Atualizar IntersectionObserver (threshold 0.15, animações variadas) |
| `src/layouts/BaseLayout.astro` | Adicionar link para fonte Inter no `<head>` |

---

## 8. Critérios de Sucesso

- [ ] Build passa sem erros (`bun run build`)
- [ ] Typecheck limpo (`bunx astro check`)
- [ ] Todas as 11 seções exibem as novas cores (fundo `#131313`, superfícies `#1a1c1e`... `#353534`)
- [ ] Botões têm altura mínima 44px, padding horizontal confortável, raio 4px, e glow dourado no hover
- [ ] Cards têm fundo `#201f1f`, borda `#4d4635`@50%, raio 8px, e lift no hover
- [ ] Texto de corpo usa Inter; headlines e labels usam Manrope
- [ ] Margens desktop são 64px laterais; mobile 16px
- [ ] Section gap é 120px desktop, 80px tablet, 64px mobile
- [ ] Animações de entrada têm stagger em grids e easing refinado
- [ ] Hover de botão exibe glow dourado visível
- [ ] Reduced motion respeita `prefers-reduced-motion`

---

## 9. Fora de Escopo (YAGNI)

- ❌ Novas bibliotecas de animação (Framer Motion, GSAP) — CSS puro é suficiente
- ❌ Novas páginas além da landing page
- ❌ Alterações no conteúdo textual (apenas design/tokens)
- ❌ Novos componentes shadcn — ajustar os existentes
- ❌ Testes automatizados — build e typecheck são a verificação

---

*Aprovado por:* _________________  
*Data da aprovação:* _________________
