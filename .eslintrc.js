module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential',  // Lv1
    "plugin:vue/vue3-strongly-recommended", // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    "eslint:recommended",
  ],
  parser: "@babel/eslint-parser",

  // eslint-plugin-vue 페이지의 Options를 rules에 추가하면 됨
  // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
  rules: {
    "vue/new-line-between-multi-line-property": [
      "error",
      {
        minLineOfMultilineProperty: 2,
      },
    ],
  },
};
