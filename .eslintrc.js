module.exports = {
  root: true,
  extends: '@react-native',

  rules: {
    'prettier/prettier': 0,
  },
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      parser: 'flow',
      endOfLine: 'auto',
    },
  ],
};
