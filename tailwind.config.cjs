module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.75rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};