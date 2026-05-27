# UI Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current UI into a high-end "Awwwards-level" experience with fluid motion, pixel-perfect images, and refined micro-interactions.

**Architecture:** Centralized animation system in CSS for consistent easing, vanilla JS for magnetic/hover effects, and Astro-native image optimization for quality and performance.

**Tech Stack:** Astro 6, Tailwind CSS 3, Bun, Vanilla CSS/JS.

---

### Task 1: Centralized Motion System (CSS)

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add custom easing and animation tokens**

Add the following to `@layer base` or as custom utilities:

```css
@layer base {
  :root {
    --ease-premium: cubic-bezier(0.22, 1, 0.36, 1);
  }
}

@layer utilities {
  .animate-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s var(--ease-premium), transform 0.8s var(--ease-premium);
  }

  .animate-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .split-text-line {
    display: block;
    overflow: hidden;
  }

  .split-text-content {
    display: inline-block;
    transform: translateY(110%);
    transition: transform 0.8s var(--ease-premium);
  }

  .is-visible .split-text-content {
    transform: translateY(0);
  }
}
```

- [ ] **Step 2: Verify CSS builds correctly**

Run: `bun run build`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "style: add premium easing and reveal animation tokens"
```

---

### Task 2: Refined Scroll Observer Logic

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update the IntersectionObserver and stagger logic**

Replace the current script with a more robust version that handles staggered delays and the new `.animate-reveal` class.

```javascript
// src/pages/index.astro script section
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

// Select all elements with data-animate and observe
document.querySelectorAll('[data-animate]').forEach((el) => {
  const delay = el.getAttribute('data-animate-delay') || '0';
  if (delay !== '0') {
    el.style.transitionDelay = `${Number(delay) * 100}ms`;
  }
  observer.observe(el);
});
```

- [ ] **Step 2: Verify in browser (manual)**

Check if sections reveal with the new easing.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: refine scroll observer and stagger logic"
```

---

### Task 3: Header Refinement (Glassmorphism & Active Indicator)

**Files:**
- Modify: `src/components/Header.astro`

- [ ] **Step 1: Implement dynamic glassmorphism and active link indicator**

Update the header container and link styles.

```astro
<!-- src/components/Header.astro -->
<header id="main-header" class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent">
  <!-- content -->
</header>

<script>
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-background/80', 'backdrop-blur-md', 'py-4', 'border-white/5');
      header.classList.remove('py-6');
    } else {
      header.classList.remove('bg-background/80', 'backdrop-blur-md', 'py-4', 'border-white/5');
      header.classList.add('py-6');
    }
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: add dynamic glassmorphism to header"
```

---

### Task 4: Hero & Magnetic Button

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/components/ui/Button.astro`

- [ ] **Step 1: Implement Split-Text in Hero headlines**

Wrap headline lines in `.split-text-line` and `.split-text-content`.

- [ ] **Step 2: Add magnetic effect to Button.astro**

```javascript
// src/components/ui/Button.astro script
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro src/components/ui/Button.astro
git commit -m "feat: implement split-text and magnetic button in hero"
```

---

### Task 5: Pixel-Perfect Images (Adaptive Quality)

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/components/Especialidades.astro` (or any image container)

- [ ] **Step 1: Implement Astro <Image /> component for optimization**

Replace `<img>` with Astro's `Image` component.

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../../public/images/hero-diego.jpg';
---
<Image 
  src={heroImg} 
  alt="Dr. Dhiego Ventura" 
  width={1200}
  height={1500}
  format="webp"
  quality={90}
  class="object-cover w-full h-full"
/>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.astro src/components/Especialidades.astro
git commit -m "perf: optimize images with astro:assets"
```

---

### Task 6: Card Hover Glow & Staggered Reveal

**Files:**
- Modify: `src/components/Servicos.astro`
- Modify: `src/components/Vantagens.astro`

- [ ] **Step 1: Add hover glow effect to cards**

Add a script to track mouse position for the "glow" overlay.

- [ ] **Step 2: Add staggered data-animate attributes**

Ensure cards have `data-animate="reveal"` and incrementing `data-animate-delay`.

- [ ] **Step 3: Commit**

```bash
git add src/components/Servicos.astro src/components/Vantagens.astro
git commit -m "feat: add card hover glow and staggered reveals"
```

---

### Task 7: Footer Unreveal Effect

**Files:**
- Modify: `src/components/Footer.astro`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Implement fixed footer with unreveal effect**

Set footer to `fixed bottom-0` and add margin-bottom to the `main` tag equal to footer height.

- [ ] **Step 2: Final Verification**

Run: `bun run build` and `bunx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro src/layouts/BaseLayout.astro
git commit -m "feat: implement footer unreveal effect"
```
