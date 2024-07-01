const config = require('@aipmorg/lint').eslint;

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'unicorn/prefer-string-replace-all': 0,
  },
};
