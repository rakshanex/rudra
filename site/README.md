# site/

This is the source of the RUDRA website. Everything here is written in RUDRA (`.rux`), and the site it produces contains no JavaScript.

| File | Purpose |
|---|---|
| `gen.rux` | Generator entry point. Writes every page, `style.css`, the search page, `sitemap.xml`, `robots.txt`, `CNAME` and the Google verification file, and copies the images from `assets/` |
| `layout.rux` | Page head (title, description, canonical URL, Open Graph and Twitter tags, JSON-LD), header, footer and the search page layout |
| `routes.rux` | Route table (path, title, description) and the page dispatcher |
| `content_*.rux` | Page bodies |
| `style.rux` | The stylesheet |
| `check.rux` | Checks a generated site. It reports a missing route, a `.js` file, a `<script>` tag other than JSON-LD, an inline event handler, a `javascript:` URL, or a broken internal link or image |
| `assets/` | Images only |

## Build and check

You need the `rudra` driver (`driver/rudra.rux` in the main repository) and `ruxc`. Run these commands from this directory:

```bash
rudra run gen.rux dist
rudra run check.rux dist
```

The check prints `SITE_CHECK_PASSED` and exits with 0 when the site has no problems. Otherwise its exit code is the number of problems found.

## Features that work without JavaScript

| Feature | How it works now |
|---|---|
| Theme | Follows the system setting through `prefers-color-scheme` |
| Mobile navigation | The links wrap under the logo; there is no menu button |
| Search | `/search/` lists every page with its description. Use the browser's find-in-page to search it |
| Playground | Shows every sample program and its verified output at the same time |
| Account | Links to GitHub sign-in and has a sign-out form. The profile is not shown, because showing it would need JavaScript |
| Code blocks | No Copy button; select the text to copy it |

## Validation (2026-11-06)

`check.rux` passed on the generated site: 39 routes, 41 HTML files, 0 problems. A copy of the site with deliberately inserted problems was detected with exit code 87.

## Content accuracy

The page content was checked against the real self-hosted RUDRA 1.1.0 release: `bin/ruxc`, the `bin/rudra` wrapper, 68 std modules, and Linux x86-64 only.

- **Code samples.** Every code sample on the site (30 samples) was compiled with the real `ruxc` and run, and all 30 passed. Outputs shown on the pages are the actual outputs.
- **Commands.** The site documents only the commands the release has: `ruxc <file.rux> <output>` and `rudra <file.rux> <output>`.
- **Old tools and platforms.** The 1.0.x Rust toolchain had `rudrac`, `ruxpkg`, `rudra-lsp`, `--run` and macOS/Windows installers. These appear only in statements that say they are not part of 1.1.0, or that describe the older 1.0.x releases.
- **Meta descriptions.** Descriptions in `routes.rux` were corrected to match each page.
- **License.** The site does not name a license type. It points to the `LICENSE` file in the repository and in each release as the authoritative text.
- **Accounts.** The site has no accounts or sign-in. The header has no Sign in button, and the login and account pages say so.

Earlier structural changes from the Astro build:

- The Copy buttons were removed.
- The downloads and install pages point to the real 1.1.0 assets, with checksums verified against the downloaded files.
- The playground and account pages were made static.
