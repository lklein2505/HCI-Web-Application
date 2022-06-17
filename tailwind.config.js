module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
                'vagon-blue': '#0072BC',
                'vagon-yellow': '#FDD526'
          },
          backgroundImage: {
                'background-stripes': "url('/assets/backgroundStripes.png')"
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};