module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
    'unused-imports',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useLenis|useTransform)',
      },
    ],
    'jsx-a11y/control-has-associated-label': [
      'warn',
      {
        labelAttributes: ['label'],
        controlComponents: ['Link, Button'],
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 3,
      },
    ],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
};
