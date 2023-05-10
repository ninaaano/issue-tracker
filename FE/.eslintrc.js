module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 0, //
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 0, // prop의 타입 지정 끄기.
    'arrow-body-style': 0, // return 하고 괄호 없이 반환 끄기
    'no-unused-vars': 1, // 사용하지 않는 변수 warning
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0, // 하나만 export할때 default로 해야만하는 규칙 off
  },
};
