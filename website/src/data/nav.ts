export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Documentation", href: "/docs/getting-started" },
  { label: "Downloads", href: "/downloads" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Transparency", href: "/transparency" },
  { label: "Developers", href: "/developers" },
  { label: "Community", href: "/community" }
];

export const githubRepo = "https://github.com/rakshanex/rudra";
export const githubDiscussions = "https://github.com/rakshanex/rudra/discussions";
export const githubIssues = "https://github.com/rakshanex/rudra/issues";
export const releasesPage = "https://github.com/rakshanex/rudra/releases";
