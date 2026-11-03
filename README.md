<p align="center">
  <img src="assets/branding/rudra/rudra-phoenix.png" alt="RUDRA" width="200">
</p>

<h1 align="center">RUDRA</h1>

<p align="center"><strong>A fast, safe, self-contained systems language.</strong></p>

<p align="center">
  <a href="https://rudralang.tech">rudralang.tech</a> ·
  <a href="https://github.com/rakshanex/rudra/releases">Downloads</a> ·
  <a href="https://github.com/rakshanex/rudra/discussions">Community</a>
</p>

---

RUDRA is a compiled, statically typed systems language with a native backend:
the compiler turns a single `.rux` source file into a native executable. It has
an easy, readable syntax, compile-time type checking and a memory-safety
oriented design.

The compiler source is proprietary. This repository distributes the RUDRA
toolchain binaries and the public documentation. The toolchain is free to use.

## Install

Download the archive for your platform from the
[releases](https://github.com/rakshanex/rudra/releases) page, verify its
checksum, then install.

| Platform | Asset | Release |
|----------|-------|---------|
| Linux (x86_64) | `rudra-linux-x86_64.tar.gz` | v1.1.0 (latest) |
| macOS (Apple Silicon) | `rudra-macos-arm64.pkg` | v1.0.1 |
| Windows (x86_64) | `rudra-1.0.1-windows-x86_64-setup.exe` | v1.0.1 |

**Linux:**

```bash
tar -xzf rudra-linux-x86_64.tar.gz
cd rudra-linux-x86_64 && ./install.sh
rudra version
```

Verify the download before installing:

```bash
sha256sum rudra-linux-x86_64.tar.gz
# expected: 3da546bae30161456698504bc779470881c4f8219d8154766391dcc9ce9fcd2f
```

The distributed toolchain binaries (`rudra`, `rudrac`, `ruxpkg`, `rudra-lsp`)
are dynamically linked executables.

## Your first program

```rux
fn main() {
    print("Hello, RUDRA!");
}
```

```bash
rudrac hello.rux --run
```

## The tools

| Tool | Purpose |
|------|---------|
| `rudra` | driver: new, run, build, check, clean, doctor, version |
| `rudrac` | compiler: one `.rux` file to a native binary |
| `ruxpkg` | package tool (local registry) |
| `rudra-lsp` | language server (editor diagnostics) |

## Feature status (v1.1.0, independently verified)

Statuses below reflect testing against the shipped v1.1.0 toolchain. Full
evidence is on the [Transparency](https://rudralang.tech/transparency) page.

| Capability | Status | Notes |
|------------|--------|-------|
| Compile and run | VERIFIED | `rudrac file.rux --run` produces and runs a native binary |
| Functions, control flow, structs, enums, match | VERIFIED | type-checked at compile time |
| OS threads | VERIFIED | `spawn(fn, arg)` runs on a real OS thread |
| Mutex | PARTIALLY VERIFIED | `mutex_new`, `lock`, `unlock` |
| Channels | PARTIALLY VERIFIED | `chan_new`, `chan_send`, `chan_recv` |
| HTTP client | PARTIALLY VERIFIED | `http_get(url)` over TCP; numeric IP only, no DNS, no TLS |
| JSON object reading | PARTIALLY VERIFIED | `json_get(text, key)` |
| DNS / HTTPS / TLS | PLANNED | not shipped |

API note: the channel functions are `chan_send` and `chan_recv`, and JSON
object reading uses `json_get`. Earlier distribution notes referenced `send`,
`recv` and `json_parse`, which do not exist in the shipped v1.1.0 binary.

## Documentation

Full documentation, examples and the ecosystem overview are at
[rudralang.tech](https://rudralang.tech):

- [Getting started](https://rudralang.tech/docs/getting-started)
- [Language fundamentals](https://rudralang.tech/docs/language-fundamentals)
- [Standard library](https://rudralang.tech/docs/standard-library)
- [Compiler guide](https://rudralang.tech/docs/compiler)
- [Transparency and verification](https://rudralang.tech/transparency)

The website source lives in [`website/`](website/) and is a static Astro site.

## Community and support

- Discussion and help: [GitHub Discussions](https://github.com/rakshanex/rudra/discussions)
- Bug reports: [GitHub Issues](https://github.com/rakshanex/rudra/issues)
- Direct support: support@rudralang.tech

## License

RUDRA is free to use: download it and build anything, including commercial
software, at no charge. The programs and binaries you produce are entirely
yours. The RUDRA toolchain itself is proprietary; the compiler source is not
public, and the binaries may not be reverse-engineered or resold. See
[LICENSE](LICENSE) for the full terms.

## RAKSHANEX Technologies

<p align="left">
  <img src="assets/branding/rakshanex/rakshanex-eagle.png" alt="RAKSHANEX Technologies" width="90">
</p>

RUDRA is a product of RAKSHANEX Technologies.

Copyright 2026 Piyush Kumar / RAKSHANEX Technologies. All rights reserved.
Powered by RAKSHANEX Technologies.
