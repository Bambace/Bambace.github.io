/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        'brand-dark': '#303450', // El fondo purpúreo/azulado
        'brand-navy': '#1B213B', // El fondo oscuro
        'brand-blue': '#164893', // El azul vibrante
        'brand-light': '#E2E8F0', // Texto claro
      }
    },
  },
  plugins: [],
}

