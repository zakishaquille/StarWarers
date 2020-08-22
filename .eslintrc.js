module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 'off',
    'eqeqeq': 'off',
    'radix': 'off',
    'no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'off',
    "prettier/prettier": [
      "off", {
        "bracketSpacing": true,
      }
    ]
  },
};
