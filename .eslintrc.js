module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true
    },
    //extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      semi: [
        1,
        'always'
      ]
    }
  };