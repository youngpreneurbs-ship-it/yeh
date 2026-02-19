/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Brand Colors
        navy: {
          DEFAULT: "#1E4773",
          50: "#E8F0F7",
          100: "#D1E1EF",
          200: "#A3C3DF",
          300: "#75A5CF",
          400: "#4787BF",
          500: "#1E4773",
          600: "#183A5D",
          700: "#122D47",
          800: "#0C2031",
          900: "#06131B",
        },
        lime: {
          DEFAULT: "#9DC241",
          50: "#F5F9E8",
          100: "#EBF3D1",
          200: "#D7E7A3",
          300: "#C3DB75",
          400: "#AFCF47",
          500: "#9DC241",
          600: "#7E9E34",
          700: "#5F7A27",
          800: "#40561A",
          900: "#21320D",
        },
        yellow: {
          DEFAULT: "#F2C94C",
          50: "#FDF8E8",
          100: "#FBF1D1",
          200: "#F7E3A3",
          300: "#F3D575",
          400: "#EFC747",
          500: "#F2C94C",
          600: "#C2A13D",
          700: "#92792E",
          800: "#62511F",
          900: "#322910",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Nunito", "system-ui", "sans-serif"],
        label: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 18px 40px rgba(0, 0, 0, 0.18)",
        "card-hover": "0 24px 50px rgba(0, 0, 0, 0.22)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        float: "float 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "mesh-float": "mesh-float 18s ease-in-out infinite",
        "mesh-float-delayed": "mesh-float-delayed 22s ease-in-out infinite",
        "mesh-float-slow": "mesh-float-slow 25s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
