/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "50%": "50%",
        "35%": "35%",
        "10%": "10%",
        "90%": "90%",
        "70%": "70%",
        "90vh": "90vh",
        "90vw": "90vw",
        "80vh": "80vh",
        "80vw": "80vw",
        "10vh": "10vh",
        "50px": "50px",
        "80%": "80%",
        "25vw": "25vw",
        "50vw": "50vw",

        "100%": "100%",
        "200px": "200px",
        "100vh": "100vh",
        "100px": "100px",
        "40vh": "40vh",
        "40vw": "40vw",
        "40%": "40%",
        "60%": "60%",
        "5%": "5%",
        "12.5%": "12.5%",
        "48vw": "48vw",

        "2vw": "2vw",
        "70px": "70px",

        "200vh": "200vh",
        "200vw": "200vw",
        "500vh": "500vh",
        "100vw": "100vw",
        "200px": "200px",
        "120vw": "120vw",
        "50vh": "50vh",
        "45vh": "45vh",
        "400px": "400px",
        "25vh": "25vh",
        "300px": "300px",
        "30%": "30%",
        224: "224px",
      },
    },
  },
  plugins: [],
};
