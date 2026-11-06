# site/

This is the source of the RUDRA website. Everything here is written in RUDRA (`.rux`), and the site it produces contains no JavaScript.

| File | Purpose |
|---|---|
| `gen.rux` | Generator entry point. Writes one folder per host (`main`, `docs`, `download`, `playground`, `status`, `benchmarks`), each with its pages, `style.css`, `sitemap.xml`, `robots.txt`, `_headers` and images. `main` also gets the search page, `CNAME`, the Google verification file and `_redirects` from the old paths to the subdomains |
| `hosts.rux` | Which subdomain each route belongs to, and rewriting of links: links within the same host stay relative, links to other hosts become absolute (`https://docs.rudralang.tech/...`) |
| `layout.rux` | Page head (title, description, canonical URL, Open Graph and Twitter tags, JSON-LD), header, footer and the search page layout |
| `routes.rux` | Route table (path, title, description) and the page dispatcher. Paths are written as on one site (`/docs/installation/`) and mapped to hosts by `hosts.rux` |
| `content_*.rux` | Page bodies |
| `style.rux` | The stylesheet |
| `check.rux` | Checks a generated site. It reports a missing route, a `.js` file, a `<script>` tag other than JSON-LD, an inline event handler, a `javascript:` URL, or a broken internal link or image. Links to other RUDRA hosts are checked against that host's generated folder |
| `assets/` | Images only |

## Hosts

| Host | Content |
|---|---|
| rudralang.tech | Home, features, ecosystem, roadmap, transparency, community, legal pages, search |
| docs.rudralang.tech | Documentation; `/` is Getting Started |
| download.rudralang.tech | Downloads |
| status.rudralang.tech | Service and release status (static snapshot) |
| benchmarks.rudralang.tech | Measured benchmark results |
| playground.rudralang.tech | Live playground (separate RUDRA server) |
| packages.rudralang.tech | Package registry (separate RUDRA server) |

## Build and check

You need the `rudra` driver (`driver/rudra.rux` in the main repository) and `ruxc`. Run these commands from this directory:

```bash
rudra run gen.rux out
rudra run check.rux out
```

The check prints `SITE_CHECK_PASSED` and exits with 0 when the site has no problems. Otherwise its exit code is the number of problems found.

## Features that work without JavaScript

| Feature | How it works now |
|---|---|
| Theme | Dark on every page by default (`color-scheme: dark`) |
| Mobile navigation | The links wrap under the logo; there is no menu button |
| Search | `/search/` lists every page with its description. Use the browser's find-in-page to search it |
| Playground | `playground.rudralang.tech` is a RUDRA server (`apps/playground` in the main repository): an HTML form posts the code, and the server compiles and runs it in a sandbox. The static `/playground/` page generated here is not deployed |
| Account | The site has no accounts |
| Code blocks | No Copy button; select the text to copy it |

## Validation (2026-11-06)

`check.rux` passed on the generated site: 41 routes, 6 hosts, 48 HTML files, 0 problems. Removing one docs page made it report the missing route and the broken cross-site links that pointed to it. All 30 code samples compile and run. On the live site, every page on every host returned 200, there were no executable scripts, and each old path redirected (301) to its subdomain.

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
