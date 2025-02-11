/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      segoeui: ["SegoeUI", "sans-serif"],
      artegra: ["Artegra", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "24px", letterSpacing: "-0.01rem" }],
      sm: ["14px", { lineHeight: "24px", letterSpacing: "-0.01rem" }],
      base: ["16px", { lineHeight: "26px", letterSpacing: "-0.02rem" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.02rem" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.02rem" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.022rem" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.022rem" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.022rem" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.022rem" }],
    },
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
