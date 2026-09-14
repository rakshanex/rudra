<p align="center">
  <img src="logo.png" alt="RUDRA" width="220">
</p>

# RUDRA 🔱 — A Fast, Safe, and Easy Systems Language

RUDRA is a compiled programming language with a **self-contained backend** (it emits native machine code itself, with no C compiler or linker), real
**memory safety** (no null, bounds-checked, use-after-free caught), a modern
type system (generics, trait bounds, sum types, `Option`/`Result`), and an
easy, readable syntax.

This repository distributes the **RUDRA toolchain binaries**. RUDRA is free to
use. The compiler source is proprietary and not included.

> **Honest scope:** RUDRA is great for single-binary command-line tools AND
> now runs real TCP + HTTP servers natively (zero dependencies) — deployable to
> any Linux VPS. Client-side networking (outbound requests), threads, and JSON
> are still on the roadmap.

## Install

RUDRA runs on Linux, macOS, and Windows. Download the archive for your system
from the latest [release](https://github.com/rakshanex/rudra/releases), extract
it, and put the `bin` folder on your PATH.

| OS | Download |
|----|----------|
| Linux (x86_64) | `rudra-linux-x86_64.tar.gz` |
| macOS (Apple Silicon) | `rudra-macos-arm64.tar.gz` |
| Windows (x86_64) | `rudra-windows-x86_64.zip` |

**Linux / macOS:**
```bash
tar -xzf rudra-<your-platform>.tar.gz
cd rudra-* && ./install.sh    # or add ./bin to your PATH
rudra version
```

**Windows:** extract the `.zip` and add the `bin` folder to your PATH, then run
`rudra version` in a new terminal.

RUDRA is fully self-contained: it generates native code and writes the
executable itself. **No C compiler, linker, or other toolchain is required.**


## The Tools

| Tool | Purpose |
|------|---------|
| `rudra` | driver: create, run, build, format, test |
| `rudrac` | compiler: one `.rux` file → native binary |
| `ruxpkg` | package manager (local registry) |
| `rudra-lsp` | language server (editor diagnostics) |

## Your First Program

```rudra
fn main() {
    print("Hello, RUDRA!");
}
```

```bash
rudrac hello.rux --run
```

## License

RUDRA is **free to use** — download it and build anything, including commercial
software, at no charge. The programs and binaries **you** produce are entirely
yours.

The RUDRA toolchain itself is proprietary: the compiler **source code is not
public**, and the binaries may not be reverse-engineered or resold as your own
product. See [LICENSE](LICENSE) for the full terms.

© 2026 Piyush Kumar / RAKSHANEX TECHNOLOGIES. All rights reserved.


## VS Code Extension

RUDRA has an official VS Code extension (syntax highlighting + live error
diagnostics), published by **RAKSHANEX TECHNOLOGIES**.

**Install from the Marketplace (easiest):**
- In VS Code: Extensions (Ctrl+Shift+X) → search **"RUDRA"** → Install
- Or run:
  ```bash
  code --install-extension rakshanex.rudra
  ```
- Marketplace page: https://marketplace.visualstudio.com/items?itemName=rakshanex.rudra

The extension uses the `rudra-lsp` binary (included in this toolchain). If it is
not on your PATH, set `rudra.lspPath` in VS Code settings to its absolute path.
