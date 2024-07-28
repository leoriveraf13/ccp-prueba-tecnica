// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Color de fondo del botón, texto principal
        secondary: '#E6E6E6', // Color del botón secundario
        link: '#0045FF', // Color de los enlaces
        error: '#E74C3C', // Color de los mensajes de error
        background: '#FFFFFF', // Color de fondo
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Fuente del diseño
      },
      fontSize: {
        sm: '14px', // Tamaño de fuente para botones y labels
        base: '15px', // Tamaño de fuente base
        lg: '16.5px', // Tamaño de fuente para títulos
      },
      spacing: {
        '16': '16px',
        '20': '20px',
        '52': '52px',
      },
      borderRadius: {
        'md': '4px',
      },
      boxShadow: {
        'md': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};