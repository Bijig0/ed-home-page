/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      width: {
        button: "28rem",
      },
      colors: {
        grey: "#717f94",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
