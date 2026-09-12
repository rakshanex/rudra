# RUDRA 🔱 — A Fast, Safe, and Easy Systems Language

RUDRA is a compiled programming language with **C-class speed**, real
**memory safety** (no null, bounds-checked, use-after-free caught), a modern
type system (generics, trait bounds, sum types, `Option`/`Result`), and an
easy, readable syntax.

This repository distributes the **RUDRA toolchain binaries**. RUDRA is free to
use. The compiler source is proprietary and not included.

## Install (Linux x86_64)

```bash
tar -xzf rudra-1.0.0-linux-x86_64.tar.gz
cd rudra-public
./install.sh
rudra version
```

A C compiler (`gcc`) must be present on your machine — RUDRA compiles to native
code through it.

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

Free to use. See LICENSE. Source is proprietary (© RAKSHANEX).

## VS Code Extension

Get syntax highlighting and live error diagnostics in VS Code:

1. Download `rudra-vscode-1.0.0.vsix` from the latest release.
2. Install it:
   ```bash
   code --install-extension rudra-vscode-1.0.0.vsix
   ```
   (Or in VS Code: Extensions → "…" menu → "Install from VSIX".)
3. Open any `.rux` file — you get highlighting and inline errors.

The extension uses the `rudra-lsp` binary (included in this toolchain). If it is
not on your PATH, set `rudra.lspPath` in VS Code settings to its absolute path.
