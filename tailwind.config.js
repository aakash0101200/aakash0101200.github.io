/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌈 Base Theme Colors
        background: "#F9FAFB",   // soft white-gray background
        foreground: "#111827",   // near-black text
        muted: "#6B7280",        // subtle gray text
        accent: {
          DEFAULT: "#2563EB",    // refined blue (professional)
          light: "#60A5FA",      // hover/gradient variant
          dark: "#1E40AF",       // active/focused variant
        },
        border: "#E5E7EB",       // for cards, separators, etc.
        card: "#FFFFFF",         // white surface
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(0,0,0,0.04)",
        medium: "0 4px 12px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
}
