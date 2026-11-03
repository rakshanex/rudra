export interface DiscussionCategory {
  name: string;
  purpose: string;
}

export const categories: DiscussionCategory[] = [
  { name: "General Discussion", purpose: "Open conversation about RUDRA." },
  { name: "Getting Help", purpose: "Questions and troubleshooting." },
  { name: "Language Development", purpose: "Syntax, semantics and language design." },
  { name: "Compiler and Runtime", purpose: "Compiler behavior, runtime and performance." },
  { name: "Ruxel Studio", purpose: "The graphical IDE." },
  { name: "AI and Autonomous Systems", purpose: "AI-assisted and autonomous tooling." },
  { name: "Security Research", purpose: "Security discussion and responsible disclosure." },
  { name: "Tutorials and Learning", purpose: "Guides and learning resources." },
  { name: "Project Showcase", purpose: "Projects built with RUDRA." },
  { name: "Feature Requests", purpose: "Proposals for new capabilities." },
  { name: "Bug Reports", purpose: "Problem reports (also tracked in Issues)." },
  { name: "Announcements", purpose: "Official project announcements." }
];

export const providedByGitHub: string[] = [
  "Developer profiles and accounts.",
  "Discussion threads with nested replies.",
  "Search, tags and categories.",
  "Markdown and code snippets.",
  "Reactions and upvotes.",
  "Accepted answers for questions.",
  "Report and moderation tools.",
  "Notifications and subscriptions."
];

export const notImplementedOnSite: string[] = [
  "Custom website login or registration.",
  "A website-hosted user database or profiles.",
  "A website-hosted notification system.",
  "A custom developer dashboard with persistence."
];
