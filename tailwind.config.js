/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a7c2a',
          light: '#6ba83f',
          dark: '#3a6320',
        },
        secondary: {
          DEFAULT: '#7fb86f',
          light: '#95c988',
        },
        accent: {
          blue: '#4a90e2',
          'blue-light': '#6ba8f0',
          coral: '#ff6b5a',
          'coral-light': '#ff8a7d',
          amber: '#ffa726',
          'amber-light': '#ffb74d',
        },
        text: {
          primary: '#2d4a1f',
          secondary: '#4a7c2a',
          muted: '#6a8c5a',
        },
        bg: {
          white: '#ffffff',
          'off-white': '#f8f9f7',
          'light-grey': '#f0f2ef',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

