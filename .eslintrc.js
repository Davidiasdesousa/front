module.exports = {
  parser: 'babel-eslint',
  // extends: ['airbnb', 'prettier'],
  env: {
    jest: true,
    es6: true,
  },
  plugins: ['import', 'prettier', 'react', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': [0],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    'react/destructuring-assignment': 0,
    'import/no-unresolved': 'off',
    curly: 2,
    'dot-notation': 2,
    'id-length': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-else-return': 2,
    'no-inner-declarations': 2,
    'no-lonely-if': 2,
    'no-shadow': 2,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [
      2,
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    camelcase: ['error', { ignoreDestructuring: true, properties: 'never' }],
    'no-useless-return': 2,
    'no-var': 2,
    'one-var': [2, 'never'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-template': 2,
    'prefer-promise-reject-errors': 2,
    strict: [2, 'global'],
    'global-require': 0,
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'no-console': ['error', { allow: ['tron'] }],
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
    settings: {
      'import/resolver': 'meteor',
    },
  },
};
