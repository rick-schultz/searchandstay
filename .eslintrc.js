module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'arrow-parens': 'off'
  }
}
