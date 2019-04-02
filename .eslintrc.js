module.exports = {
  env: {
    browser: true,
    es6: true
  },
  plugins: ['react', 'react-hooks', 'graphql'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    jsx: true
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 0,
    'prefer-destructuring': 'warn',
    'react/forbid-prop-types': 0,
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./schema/countries.json')
      }
    ]
  }
};
