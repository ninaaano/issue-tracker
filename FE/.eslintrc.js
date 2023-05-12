module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
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
    'import/prefer-default-export': 0, // 하나의 변수만 export할때 default로 해야만하는 규칙 off
    'react/jsx-fragments': 0, // React.Fragment 사용을 위한 규칙 off.
    'react/jsx-pascal-case': 0, // Styled Component로 생성한 Component 이름 앞에 $ 쓰고 싶어서 규칙 off
    'object-curly-newline': 0, // export를 한번에 하기 위한 코딩 컨벤션을 위해 규칙 off.
    'storybook/story-exports': 0, // story book export 하기싫음.
    'react/jsx-props-no-spreading': 0, // props 객체 spread 적용위해 규칙 off
  },
};
