/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sponsor: {
          primary: "#facc15",   // example accent color
          dark: "#111827"
        }
      }
    }
  },
  corePlugins: {
    preflight: false
    // Disable preflight if building a library
    // This prevents Tailwind from resetting user site styles
  },
  plugins: []
}