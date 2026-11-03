# RUDRA Website Deployment

This document describes how to deploy the website to Vercel and attach
`rudralang.tech`. Nothing here has been executed. No deployment, preview, DNS
change, or domain attachment has been performed. The public launch date is
8 November 2026.

## Prerequisites

- A Vercel account with access to the target project.
- The Vercel CLI, or the Vercel dashboard.
- Access to DNS management for `rudralang.tech`.

## Project configuration

The build is configured in `vercel.json` and `astro.config.mjs`.

- Framework: Astro (static output).
- Build command: `npm run build`.
- Output directory: `dist`.
- Root directory (in Vercel project settings): `website`.

Security headers (HSTS, X-Content-Type-Options, X-Frame-Options,
Referrer-Policy, Permissions-Policy and a restrictive Content-Security-Policy)
and a `www` to apex redirect are defined in `vercel.json`.

## Environment variables

None are required. The site is fully static and has no backend, no API keys and
no secrets. If an environment variable is added later, document it here and set
it in the Vercel project settings, never in the repository.

## Local verification before any deploy

```bash
cd website
npm install
npm run build
npm run preview
```

Confirm the build completes and the preview renders before considering a deploy.

## Domain setup (rudralang.tech) - do not perform before launch day

1. In the Vercel project, add the domains `rudralang.tech` and
   `www.rudralang.tech`.
2. At the DNS provider for `rudralang.tech`, create the records Vercel shows:
   - An apex record (A or ALIAS/ANAME) for `rudralang.tech` pointing to Vercel.
   - A CNAME for `www.rudralang.tech` pointing to the Vercel target.
3. Wait for DNS propagation and for Vercel to issue the TLS certificate.
4. The `www` host redirects to the apex host via the rule in `vercel.json`.

The `public/CNAME` file records the intended apex domain for reference. It does
not activate the domain by itself.

## Launch-day checklist (8 November 2026)

Perform in order, only on launch day, and only after final owner approval.

1. Confirm the release repository is at the intended commit and that the website
   source is the approved version.
2. From a clean checkout, run `cd website && npm install && npm run build` and
   confirm it completes with no errors.
3. Deploy to Vercel production:
   ```bash
   cd website
   vercel --prod
   ```
   (The Vercel project root must be set to `website`, or run from the project
   root with the root directory configured.)
4. Verify the production deployment URL renders all pages and that the download
   links and checksums are correct.
5. Attach `rudralang.tech` and `www.rudralang.tech` in Vercel and create the DNS
   records as above.
6. Confirm HTTPS is active and that `www` redirects to the apex domain.
7. Run a final link check against the live site.
8. Only then proceed with any public announcement.

## Rollback

Vercel keeps previous deployments. If a problem is found after deploy, promote
the previous known-good deployment from the Vercel dashboard.
