/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },
      animation: {
        top: "cardtop 3s infinite linear",
        plane: "planemove 5s infinite linear",
        scat: "gudda1 5s infinite linear",
        cycle: "gudda2 5s infinite linear",
        gudda: "tokegudda 12s infinite ",
      },
      keyframes: {
        cardtop: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      fontFamily: {
        pop: "Poppins, sans-serif",
      },
      dropShadow: {
        crd_sh: "(2px 7px 16px rgba(2, 205, 207, 0.16))",
        crd_sh_2: "0px 3px 0px 0px rgba(2, 205, 207, 0.5);",
      },
      boxShadow: {
        crd_sh_1: "0px 4px 20px 0px rgba(2, 205, 207, 0.16);",
      },

      screens: {
        xs: "350px",
        xs_1: "470px",
        xs_2: "520px",
        xxs: "420px",
        sm_2: "650px",
        lg_2: "850px",
        910: "850px",
      },
      animation: {
        rotate: "caramdice 6s infinite linear",
      },
      keyframes: {
        caramdice: {
          "0%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
