module.exports = {
  root: true,
  extends: ['@antfu/eslint-config'],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/require-prop-types': 'off',
    'vue/valid-define-props': 'off',
    'vue/valid-attribute-name': 'off',
  },
}
