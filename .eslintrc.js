module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off"
  }
};
