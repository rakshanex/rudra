# RUDRA Changelog 🔱

Distribution changelog for the RUDRA toolchain binaries.

## [1.1.0] - 2026-10-01

The **concurrency, networking, and JSON** release — all on RUDRA's
self-contained native backend (no C compiler, assembler, or linker; zero
external dependencies).

### Added
- **OS threads:** `spawn(f, arg)` runs a function on a real OS thread, with
  working cross-thread shared state.
- **Mutex** (futex-based): `mutex_new`, `lock`, `unlock`.
- **Channels:** `chan_new`, `send`, `recv` for message passing between threads.
- **HTTP client:** `http_get(url)` — parses the URL and connects over TCP.
- **JSON:** array reading (`json_len`, `json_at`) alongside object reading.
- **Time builtins:** `hour`, `minute`, `second`, and `year(secs)`.

### Roadmap (not yet shipped)
- DNS / hostname resolution and HTTPS/TLS.

### Downloads
- `rudra-linux-x86_64.tar.gz` — Linux x86_64 toolchain (rudra, rudrac, ruxpkg,
  rudra-lsp) + `install.sh`.

## [1.0.1] - 2026-09-14

- Self-contained native backend hardening: real file I/O, program args/env,
  expanded string/collection/math builtins, multi-digit float printing,
  `rudra lint`, and CLI demos (`wc`, `calc`, `numlines`).

## [1.0.0] - 2026-09-12

- First public toolchain release: self-contained native backend, memory safety,
  generics/traits/sum types, `Option`/`Result`, pattern matching.

---

© 2026 Piyush Kumar / RAKSHANEX TECHNOLOGIES. All rights reserved.
