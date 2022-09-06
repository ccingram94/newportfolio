/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fell-sc': ['IM Fell English SC', 'serif'],
      'fell': ['IM Fell English', 'serif'],
    },
    extend: {
      height: {
        '128': '32rem',
      },
      minHeight: {
        '1/2': '50vh',
      },
      minWidth: {
        '1/2': '50vw',
      },
      backgroundImage: {
        'hero': "url('/skull.jpeg')",
        'bg1': "url('/bg1.png')",
      },
    },
  },
  plugins: [],
}
