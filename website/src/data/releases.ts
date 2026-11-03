export interface ReleaseAsset {
  platform: string;
  arch: string;
  file: string;
  size: number;
  sha256: string;
  release: string;
  url: string;
  linkage: string;
}

export const latestVersion = "1.1.0";
export const releasesPage = "https://github.com/rakshanex/rudra/releases";

export const assets: ReleaseAsset[] = [
  {
    platform: "Linux",
    arch: "x86_64",
    file: "rudra-linux-x86_64.tar.gz",
    size: 1576517,
    sha256: "3da546bae30161456698504bc779470881c4f8219d8154766391dcc9ce9fcd2f",
    release: "v1.1.0",
    url: "https://github.com/rakshanex/rudra/releases/download/v1.1.0/rudra-linux-x86_64.tar.gz",
    linkage: "dynamically linked ELF"
  },
  {
    platform: "macOS",
    arch: "Apple Silicon (arm64)",
    file: "rudra-macos-arm64.pkg",
    size: 1473739,
    sha256: "cc676bbabc8470a7b4c917be98b8c73690c9808827365330ed6ac8828aed046c",
    release: "v1.0.1",
    url: "https://github.com/rakshanex/rudra/releases/download/v1.0.1/rudra-macos-arm64.pkg",
    linkage: "installer package"
  },
  {
    platform: "Windows",
    arch: "x86_64",
    file: "rudra-1.0.1-windows-x86_64-setup.exe",
    size: 3045632,
    sha256: "e4ad6143dc35747831e917aa42828e5764171c57ffec70c037ba2cbd1bbb42fe",
    release: "v1.0.1",
    url: "https://github.com/rakshanex/rudra/releases/download/v1.0.1/rudra-1.0.1-windows-x86_64-setup.exe",
    linkage: "installer executable"
  }
];

export interface ChangelogEntry {
  version: string;
  date: string;
  notes: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "1.1.0",
    date: "2026-10-01",
    notes: [
      "OS threads via spawn.",
      "Mutex (mutex_new, lock, unlock).",
      "Channels (chan_new, chan_send, chan_recv).",
      "HTTP client http_get over TCP (numeric IP; no DNS, no TLS).",
      "JSON object reading via json_get.",
      "Time builtins: hour, minute, second, year."
    ]
  },
  {
    version: "1.0.1",
    date: "2026-09-14",
    notes: [
      "File I/O, program args and environment.",
      "Expanded string, collection and math builtins.",
      "Native installers for Debian, macOS and Windows."
    ]
  },
  {
    version: "1.0.0",
    date: "2026-09-12",
    notes: [
      "First public toolchain release.",
      "Self-contained native backend, memory safety, pattern matching."
    ]
  }
];
