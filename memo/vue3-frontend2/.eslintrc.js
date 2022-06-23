module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
  sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    parser:"babel-eslint",
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'generator-star-spacing': 'off',
    'no-dupe-keys': 'off',
    'vue/no-parsing-error': 'off',
   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}