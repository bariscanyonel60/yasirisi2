/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0E1A3D",
          900: "#14275E",
          800: "#1D3475",
          700: "#274291",
          600: "#3A56A8",
          500: "#5B73C4",
        },
        steel: {
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
        },
        ember: {
          700: "#C46E00",
          600: "#E07E00",
          500: "#F28C00",
          400: "#FFA328",
          300: "#FFB85C",
        },
        whatsapp: {
          600: "#1E9E52",
          500: "#25D366",
        },
        nav: {
          DEFAULT: "#E8EAED",
        },
        mist: {
          DEFAULT: "#F7F8FA",
        },
        paper: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#172033",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.25rem, 4vw + 1rem, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(1.875rem, 2.5vw + 1rem, 3.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.5rem, 1.5vw + 1rem, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" },
        ],
      },
      maxWidth: {
        prose: "72ch",
        content: "1400px",
      },
      borderRadius: {
        card: "1rem",
        panel: "1.5rem",
        hero: "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgb(20 39 94 / 0.08)",
        lift: "0 12px 40px -12px rgb(20 39 94 / 0.18)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "grid-fade":
          "linear-gradient(to right, rgb(20 39 94 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(20 39 94 / 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
