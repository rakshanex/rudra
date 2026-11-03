export interface DocEntry {
  slug: string;
  title: string;
  group: string;
}

export const docs: DocEntry[] = [
  { slug: "getting-started", title: "Getting Started", group: "Introduction" },
  { slug: "installation", title: "Installation", group: "Introduction" },
  { slug: "language-fundamentals", title: "Language Fundamentals", group: "Language" },
  { slug: "variables-and-types", title: "Variables and Types", group: "Language" },
  { slug: "functions", title: "Functions", group: "Language" },
  { slug: "control-flow", title: "Control Flow", group: "Language" },
  { slug: "structs-and-enums", title: "Structs and Enums", group: "Language" },
  { slug: "modules", title: "Modules and Projects", group: "Language" },
  { slug: "standard-library", title: "Standard Library", group: "Reference" },
  { slug: "compiler", title: "Compiler Guide", group: "Reference" },
  { slug: "examples", title: "Examples", group: "Reference" },
  { slug: "troubleshooting", title: "Troubleshooting", group: "Help" },
  { slug: "faq", title: "FAQ", group: "Help" }
];

export function docGroups() {
  const groups: Record<string, DocEntry[]> = {};
  for (const d of docs) {
    (groups[d.group] ??= []).push(d);
  }
  return groups;
}
