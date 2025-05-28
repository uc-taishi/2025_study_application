// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";   // ← 既存カラーを保持するため

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ❶ 既存のカラーを取り込みつつ white だけ差し替え
    colors: {
      ...colors,          // ← neutral-50 など既存名も維持
      white: "#f5f5f5",   // ← ここを好きな値に
      // ↓ カスタム色はこの下に並べても OK
      background: "var(--background)",
      foreground: "var(--foreground)",
    },

    // ❷ 必要ならフォントやブレイクポイントの拡張
    extend: {
      fontFamily: {
        sans: ["Arial", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
