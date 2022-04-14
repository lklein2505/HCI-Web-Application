module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
                'vagon-blue': '#0072BC',
                'vagon-yellow': '#FDD526'
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};