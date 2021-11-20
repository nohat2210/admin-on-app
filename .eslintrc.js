module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  globals: {
    describe: true,
    it: true,
    expect: true,
    fetch: true,
    navigator: true,
    __DEV__: true,
    XMLHttpRequest: true,
    FormData: true,
  },

  ignorePatterns: ['node_modules'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
};
