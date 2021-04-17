module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'lato': ['lato', 'sans-serif'],
      'mono': ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono','Courier New','monospace']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
