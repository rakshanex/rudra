# RUDRA Website

The official RUDRA ecosystem website. Built with Astro and output as a static
site. This directory is isolated from the RUDRA language, compiler, runtime and
bootstrap. It is a presentation layer only and is not part of any `.rux`
implementation.

## Local development

```bash
cd website
npm install
npm run dev
```

## Production build

```bash
npm run build      # runs astro check then astro build
npm run preview    # preview the built output locally
```

Output is written to `dist/`.

## Structure

```
website/
  astro.config.mjs      static output, site URL, sitemap
  vercel.json           build config, security headers, www to apex redirect
  public/               static assets (emblem, favicon, robots, CNAME)
  src/
    data/               single source of truth (features, releases, ecosystem, docs, community, nav)
    components/         Header, Footer, StatusBadge, CodeBlock
    layouts/            Base, Docs
    pages/              home, about, ecosystem, docs, downloads, roadmap, transparency, community, developers, rakshanex
```

## Content integrity

Technical claims and code examples are verified against the shipped RUDRA
toolchain before publication. Feature statuses live in `src/data/features.ts`
with their evidence surfaced on the Transparency page. Release assets and
checksums in `src/data/releases.ts` are confirmed against the official GitHub
releases. No benchmarks, download counts, testimonials or community statistics
are published.

## Branding

The RUDRA product logo is the official phoenix at `public/rudra-phoenix.png`.
The parent-brand (RAKSHANEX Technologies) logo is reserved for the RAKSHANEX
section and footer and is referenced as text until the official asset is
supplied. The two brand identities are kept separate.
