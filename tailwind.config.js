/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-base": "var(--background-base)",
        "background-highlight": "var(--background-highlight)",
        "background-press": "var(--background-press)",
        "background-elevated-base": "var(--background-elevated-base)",
        "background-elevated-highlight": "var(--background-elevated-highlight)",
        "background-elevated-press": "var(--background-elevated-press)",
        "background-tinted-base": "var(--background-tinted-base)",
        "background-tinted-highlight": "var(--background-tinted-highlight)",
        "background-tinted-press": "var(--background-tinted-press)",
        "backgroundunsafe-for-small-text-base":
          "var(--backgroundunsafe-for-small-text-base)",
        "background-unsafe-for-small-text-base":
          "var(--background-unsafe-for-small-text-base)",
        "background-unsafe-for-small-text-press":
          "var(--background-unsafe-for-small-text-press)",
        "text-base": "var(--text-base)",
        "text-subdued": "var(--text-subdued)",
        "text-bright-accent": "var(--text-bright-accent)",
        "text-negative": "var(--text-negative)",
        "text-warning": "var(--text-warning)",
        "text-positive": "var(--text-positive)",
        "text-announcement": "var(--text-announcement)",
        "essential-base": "var(--essential-base)",
        "essential-subdued": "var(--essential-subdued)",
        "essential-bright-accent": "var(--essential-bright-accent)",
        "essential-negative": "var(--essential-negative)",
        "essential-warning": "var(--essential-warning)",
        "essential-positive": "var(--essential-positive)",
        "essential-announcement": "var(--essential-announcement)",
        "decorative-base": "var(--decorative-base)",
        "decorative-subdued": "var(--decorative-subdued)",
      },
    },
  },
  plugins: [],
};
