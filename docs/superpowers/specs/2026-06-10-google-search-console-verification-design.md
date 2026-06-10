# Design: Google Search Console Verification Meta Tag

**Data:** 2026-06-10

## Objetivo

Adicionar a meta tag de verificação do Google Search Console ao `<head>` do site.

## Contexto

O site possui um único layout (`src/layouts/BaseLayout.astro`) que centraliza todos os metadados SEO no `<head>`. A tag do Google Search Console é necessária para verificar a propriedade do site e acessar dados de performance nas buscas.

## Design

### Arquivo modificado
- `src/layouts/BaseLayout.astro`

### Mudança
Adicionar a seguinte linha no `<head>`, após o bloco de Geo Tags (linha 32):

```html
<!-- Google Search Console -->
<meta name="google-site-verification" content="o21thB60jxi_A7KUQQqFtj9HeE3k_j8MVEFCtEk7b04" />
```

### Escopo
- 1 arquivo, 1 linha adicionada
- Sem impacto em outros componentes, dados ou dependências
- Sem alteração de comportamento existente

## Verificação
- `bun run build` deve compilar sem erros
- `bunx astro check` deve passar limpo
