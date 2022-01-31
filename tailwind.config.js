module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif", "Helvetica", "Arial"],
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: false,
};
