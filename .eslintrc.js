module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "project": "./tsconfig.json"
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-unused-vars": 1,
    "no-unused-expressions": 1,
    "no-undef": 2
  }
}
