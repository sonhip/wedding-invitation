/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"EB Garamond"', "system-ui", "sans-serif"],
        serif: ['"EB Garamond"', "serif"],
        tinos: ['"Tinos"', "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        wedding: {
          light: "#FFDFD6", // Màu nền nhẹ
          pink: "#E3A5C7", // Màu hồng
          purple: "#B692C2", // Màu tím nhạt
          deep: "rgba(253,247,237,1.000)", // Màu tím đậm
          cream: "#FDF7ED", // Màu be nhạt
          brown: "#5C1F1F", // Màu đỏ nâu đậm
        },
        fontSize: {
          xs: ["0.75rem", "1rem"], // 12px, line-height 16px
          sm: ["0.875rem", "1.25rem"], // 14px, line-height 20px
          base: ["1rem", "1.5rem"], // 16px, line-height 24px
          lg: ["1.125rem", "1.75rem"], // 18px, line-height 28px
          xl: ["1.25rem", "1.75rem"], // 20px, line-height 28px
          "2xl": ["1.5rem", "2rem"], // 24px, line-height 32px
          "3xl": ["1.875rem", "2.25rem"], // 30px, line-height 36px
          "4xl": ["2.25rem", "2.5rem"], // 36px, line-height 40px
          "5xl": ["3rem", "1"], // 48px, line-height 1
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
