export type MaturityStatus =
  | "VERIFIED"
  | "PARTIALLY VERIFIED"
  | "PLANNED"
  | "NOT VERIFIED";

export interface EcosystemComponent {
  slug: string;
  name: string;
  tagline: string;
  status: MaturityStatus;
  description: string;
  details: string[];
  note?: string;
}

export const components: EcosystemComponent[] = [
  {
    slug: "language",
    name: "RUDRA Language",
    tagline: "A compiled systems language with an easy, readable syntax.",
    status: "VERIFIED",
    description:
      "RUDRA is a statically typed, compiled programming language. Programs are written in .rux source files and compiled to native executables.",
    details: [
      "Functions, let bindings and assignment.",
      "if / else, while and for control flow.",
      "Integers, floats, booleans, strings and lists.",
      "Structs and enums with pattern matching."
    ],
    note:
      "Language-feature availability depends on the toolchain in use. See the Transparency page for the exact verified surface of the shipped v1.1.0 binary."
  },
  {
    slug: "compiler",
    name: "Compiler",
    tagline: "Source to native binary, directly.",
    status: "VERIFIED",
    description:
      "The rudrac compiler turns a single .rux file into a native Linux executable. The distributed v1.1.0 compiler binary is a dynamically linked ELF.",
    details: [
      "rudrac <file.rux> compiles to a native binary.",
      "rudrac <file.rux> --run compiles and runs immediately.",
      "rudrac <file.rux> -o <name> sets the output name."
    ],
    note:
      "The distributed binaries (rudra, rudrac, ruxpkg, rudra-lsp) are dynamically linked. This is distinct from the project's self-hosting research compiler, which is a separate artifact and is not part of this distribution."
  },
  {
    slug: "runtime",
    name: "Runtime",
    tagline: "A minimal native execution model.",
    status: "PARTIALLY VERIFIED",
    description:
      "RUDRA programs run as native processes. The v1.1.0 runtime surface includes OS threads, a mutex and channels.",
    details: [
      "OS threads via spawn (verified).",
      "Mutex via mutex_new / lock / unlock (runs single-threaded; contention not independently proven).",
      "Channels via chan_new / chan_send / chan_recv (verified send and receive)."
    ]
  },
  {
    slug: "standard-library",
    name: "Standard Library",
    tagline: "Built-in functions for everyday systems work.",
    status: "PARTIALLY VERIFIED",
    description:
      "The toolchain ships built-in functions for strings, collections, math, time, file and process operations, basic networking and JSON object reading.",
    details: [
      "JSON object reading via json_get (verified).",
      "HTTP client via http_get over TCP (numeric IP only; no DNS, no TLS).",
      "Time builtins: hour, minute, second, year."
    ],
    note:
      "Function names were verified against the shipped binary. Earlier distribution notes referenced send, recv and json_parse, which do not exist in the shipped v1.1.0 binary."
  },
  {
    slug: "ruxel-studio",
    name: "Ruxel Studio",
    tagline: "A graphical IDE for RUDRA.",
    status: "NOT VERIFIED",
    description:
      "Ruxel Studio is a graphical development environment for RUDRA. It is not part of the v1.1.0 distribution audited here.",
    details: [
      "Not included in the v1.1.0 release archive.",
      "Status on this site will be updated when a verifiable build is published."
    ],
    note:
      "Listed for ecosystem completeness. No verifiable build was available at audit time, so no capability claims are made here."
  },
  {
    slug: "toolchain",
    name: "Developer Toolchain",
    tagline: "Driver, compiler, package tool and language server.",
    status: "PARTIALLY VERIFIED",
    description:
      "The distribution ships four tools: rudra (driver), rudrac (compiler), ruxpkg (package tool) and rudra-lsp (language server).",
    details: [
      "rudra driver commands: new, run, build, check, clean, doctor, version (verified present).",
      "rudrac compiler (verified compiling and running).",
      "ruxpkg and rudra-lsp ship as binaries (present; feature depth not independently audited here)."
    ]
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    tagline: "Planned tooling for AI-assisted development.",
    status: "PLANNED",
    description:
      "AI integration is a planned direction for the RUDRA ecosystem. No AI-integration capability is claimed or shipped in the audited distribution.",
    details: ["No verifiable AI-integration feature was present at audit time."]
  },
  {
    slug: "security",
    name: "Security Capabilities",
    tagline: "Memory-safety oriented language design.",
    status: "PARTIALLY VERIFIED",
    description:
      "RUDRA is designed around memory safety. Capability-level security claims on this site are limited to what has been independently observed.",
    details: [
      "Bounds-checked access and controlled failure are design goals of the language.",
      "This website makes no cryptographic or formal-assurance claims about the distributed binaries."
    ],
    note:
      "No guarantee is made that the software is free of vulnerabilities."
  }
];
