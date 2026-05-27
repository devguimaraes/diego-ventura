# Design Spec: Refinamento Premium "Awwwards Level" - Dr. Dhiego Ventura

Este documento detalha as melhorias de UI/UX, motion e ativos visuais para elevar a landing page ao padrão de excelência visual (pixel-perfect).

## 1. Visão Geral e Estética
- **Estilo:** Híbrido entre "The Living Canvas" (Motion Fluido) e "Clinical Luxury" (Precisão Editorial).
- **Objetivo:** Criar uma experiência imersiva que transmita autoridade clínica com sofisticação tecnológica.
- **Paleta de Cores:** Mantida conforme `DESIGN.md` (Navy, Gold, Sage), mas com refinamento de sombras e efeitos de vidro (Glassmorphism).

## 2. Sistema de Motion e Animações
- **Curva de Easing:** Padronização com `cubic-bezier(0.22, 1, 0.36, 1)` para movimentos nítidos e orgânicos.
- **Headline Reveal:** Efeito *Split-Text* para títulos (fade + slide up por linha/palavra).
- **Staggered Entrance:** Cards e itens de lista com atraso progressivo no scroll.
- **Scroll Feedback:** Glows de fundo (auroras) que acompanham sutilmente o movimento do scroll.

## 3. Micro-interações e Polimento
- **Magnetic Buttons:** Botão CTA principal no Hero com atração magnética leve ao cursor.
- **Advanced Hovers:** 
  - Cards com efeito de "lift" suave e gradiente de brilho (glow) que segue o cursor.
  - Links de navegação com indicadores fluidos (underline/ponto) que deslizam entre itens.
- **Header:** Backdrop-filter (glassmorphism) dinâmico que aumenta a opacidade com o scroll.
- **Footer:** Efeito de "unreveal" onde o conteúdo principal sobe para revelar o footer fixo por baixo.

## 4. Ativos Visuais e Performance (Pixel-Perfect)
- **Otimização de Imagens (Adaptive Quality):**
  - Implementação de `srcset` para resoluções 1x/2x (Retina).
  - Formatos Next-gen (WebP/AVIF).
  - Placeholder de carregamento (LQIP ou Blur).
- **Integridade Visual:** Uso rigoroso de `object-cover` e `aspect-ratio` fixo para evitar distorções de imagem em qualquer dispositivo.

## 5. Arquitetura de Componentes (Astro + Tailwind)
- Refatoração dos componentes existentes em `src/components/` para aplicar as novas classes de animação e estilos refinados.
- Centralização de novos utilitários de animação em `src/styles/global.css`.
