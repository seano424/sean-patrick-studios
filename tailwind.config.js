module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#262626e6',
        borderRadius: '4px',
        boxShadow: 'none',
        color: 'white',
        padding: '8px',
        margin: '18px 16px',
        opacity: '100%',
      },
    },
    extend: {
      fontFamily: {
        koburi: '"Koburi", serif',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
