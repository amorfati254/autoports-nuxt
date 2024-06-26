import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['docs/content/**/*md'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
