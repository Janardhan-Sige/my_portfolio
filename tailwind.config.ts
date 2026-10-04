import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { background: "rgb(var(--background) / <alpha-value>)", foreground: "rgb(var(--foreground) / <alpha-value>)", muted: "rgb(var(--muted) / <alpha-value>)" } } }, plugins: [] };
export default config;
