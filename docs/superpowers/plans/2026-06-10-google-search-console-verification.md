# Google Search Console Verification Tag — Implementation Plan

> **Para agentes:** Use `superpowers:subagent-driven-development` ou `superpowers:executing-plans` para implementar.

**Goal:** Adicionar a meta tag de verificação do Google Search Console ao `<head>` do site.

**Architecture:** Modificação pontual no layout base (`BaseLayout.astro`), que centraliza todos os metadados SEO.

**Tech Stack:** Astro, HTML

---

### Task 1: Adicionar meta tag de verificação

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Inserir a tag no `<head>`**

Localizar a linha 32 (`<meta name="ICBM"... />`) e adicionar após ela:

```html
    <meta name="ICBM" content="-22.8815552, -43.2931355" />

    <!-- Google Search Console -->
    <meta name="google-site-verification" content="o21thB60jxi_A7KUQQqFtj9HeE3k_j8MVEFCtEk7b04" />

    <!-- Canonical -->
```

- [ ] **Step 2: Verificar build**

```bash
bun run build
```
Expected: build concluído sem erros.

- [ ] **Step 3: Verificar typecheck**

```bash
bunx astro check
```
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat(seo): add google search console verification meta tag"
```
