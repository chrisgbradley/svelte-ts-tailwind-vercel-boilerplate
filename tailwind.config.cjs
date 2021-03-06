const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      'gray-dark': '#0A0A0A',
      'white': '#D2D0CF',
      'orange': '#FC4837'
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      handwriting: ['Pacifico'],
      mono: ['Overpass Mono']
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    }
  },

  plugins: []
};

module.exports = config;
