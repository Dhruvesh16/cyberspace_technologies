import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        spotlight: {
          "0%, 100%": {
            opacity: "0.8",
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1.15)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 2rem))" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "gradient-x": {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(100%)" },
        },
        "gradient-y": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
        },
        shine: {
          to: { backgroundPosition: "200% center" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(140, 90, 255, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(140, 90, 255, 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spotlight": "spotlight 8s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "marquee-slow": "marquee 45s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "scale-pulse": "scale-pulse 4s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "shine": "shine 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      perspective: {
        "500": "500px",
        "1000": "1000px",
        "1500": "1500px",
        "2000": "2000px",
      },
      backfaceVisibility: {
        visible: "visible",
        hidden: "hidden",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-500': {
          'perspective': '500px',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-1500': {
          'perspective': '1500px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
        '.z-depth-1': {
          'transform': 'translateZ(5px)',
        },
        '.z-depth-2': {
          'transform': 'translateZ(10px)',
        },
        '.z-depth-3': {
          'transform': 'translateZ(15px)',
        },
        '.z-depth-4': {
          'transform': 'translateZ(20px)',
        },
        '.z-depth-5': {
          'transform': 'translateZ(30px)',
        },
        '.gpu-accelerated': {
          'transform': 'translate3d(0, 0, 0)',
          'will-change': 'transform',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
