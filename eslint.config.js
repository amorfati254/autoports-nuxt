// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'node_modules',
    'schema',
    '**/*.tmpl.*',
    'sw.js',
    'package.json',
    '*.md',
    '*.code-workspace',
  ],
})
