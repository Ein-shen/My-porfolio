import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaBootstrap,
  FaFigma,
  FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";
import {
  SiVite,
  SiVercel,
  SiTailwindcss,
  SiSupabase,
  SiJinja,
  SiC,
  SiCplusplus,
  SiMysql,
  SiDart,
  SiKalilinux,
  SiDjango,
  SiRender,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNetlify,
  SiFlutter,
  SiFlask,
  SiSqlite,
  SiNodedotjs,
} from "react-icons/si";
import {
  Blocks,
  BrickWall,
  Code,
  GitBranch,
  Infinity as InfinityIcon,
  Workflow,
} from "lucide-react";

/* ------------------------------------------------------------------
   Icons
   Keys must match the tech/tag names used in your pages exactly.
------------------------------------------------------------------ */
const techIcons = {
  "Bubble.io": Blocks, // no Bubble logo in react-icons, so a generic no-code icon
  "Microsoft Teams": FaMicrosoft,
  DevOps: InfinityIcon,
  "Bubble Version Control": GitBranch,
  Git: FaGitAlt,
  Vite: SiVite,
  React: FaReact,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  NodeJS: SiNodedotjs, // alias for the no-dot spelling
  Express: SiExpress,
  "Express.js": SiExpress, // alias
  Vercel: SiVercel,
  Netlify: SiNetlify,
  HTML: FaHtml5,
  "Tailwind CSS": SiTailwindcss,
  Supabase: SiSupabase,
  Jinja: SiJinja,
  SQL: FaDatabase,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  PHP: FaPhp,
  Python: FaPython,
  Flask: SiFlask,
  JavaScript: FaJs,
  C: SiC,
  "C++": SiCplusplus,
  MySQL: SiMysql,
  CSS: FaCss3Alt,
  Bootstrap: FaBootstrap,
  Dart: SiDart,
  Flutter: SiFlutter,
  Firewall: BrickWall,
  "Kali Linux": SiKalilinux,
  Figma: FaFigma,
  Django: SiDjango,
  Docker: FaDocker,
  "CI/CD": Workflow,
  NeonDB: SiPostgresql, // Neon is serverless Postgres
  Render: SiRender,
};

// Brand colors. Anything not listed (Vercel, Next.js, Express, Flask) uses the
// text color, so it stays readable in both light and dark themes.
const techColors = {
  "Bubble.io": "#6C6CFF",
  "Microsoft Teams": "#00A4EF",
  DevOps: "#34D399",
  "Bubble Version Control": "#F05032",
  Git: "#F05032",
  Vite: "#8B7CFF",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  "Node.js": "#5FA04E",
  NodeJS: "#5FA04E", // alias
  Netlify: "#00C7B7",
  HTML: "#E34F26",
  "Tailwind CSS": "#38BDF8",
  Supabase: "#3ECF8E",
  Jinja: "#D9413B",
  SQL: "#F29111",
  PostgreSQL: "#4F8FC9",
  SQLite: "#0F80CC",
  PHP: "#777BB4",
  Python: "#4B8BBE",
  JavaScript: "#F7DF1E",
  C: "#A8B9CC",
  "C++": "#659AD2",
  MySQL: "#4479A1",
  CSS: "#1572B6",
  Bootstrap: "#8F6AD6",
  Dart: "#0175C2",
  Flutter: "#47C5FB",
  Firewall: "#F97316",
  "Kali Linux": "#557C94",
  Figma: "#F24E1E",
  Django: "#44B78B",
  Docker: "#2496ED",
  "CI/CD": "#FBBF24",
  NeonDB: "#00E599",
  Render: "#46E3B7",
};

// Look names up case-insensitively, so "FireWall", "firewall" and "Firewall"
// all find the same icon.
const normalize = (s) => s.trim().toLowerCase();

const byName = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [normalize(k), v]));

const iconsByName = byName(techIcons);
const colorsByName = byName(techColors);

export const TechIcon = ({ name, className = "h-4 w-4" }) => {
  const key = normalize(name);
  const Icon = iconsByName[key] ?? Code; // generic fallback if a name is missing
  const color = colorsByName[key];
  return (
    <Icon
      className={className}
      style={color ? { color } : undefined}
      aria-hidden="true"
    />
  );
};