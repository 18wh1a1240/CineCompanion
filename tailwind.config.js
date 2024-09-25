module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors: {
        darkbg: "#1E2938",
        blue: {
          850: "#14b8a6"
          // can be used as bg-blue-850
        }
      }
    },
  },
  plugins: [],
}