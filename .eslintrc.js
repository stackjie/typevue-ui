// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "typescript-eslint-parser",
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'eslint-config-airbnb',
  // required to lint *.vue files
  plugins: [
    'html',
    'typescript'

  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
