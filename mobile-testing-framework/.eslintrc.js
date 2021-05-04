module.exports = {
  env: {
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'filenames'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-inferrable-types': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowHigherOrderFunctions: true }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/comma-spacing':['error'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/require-await': ['error'],
    '@typescript-eslint/no-magic-numbers': ['error'],
    "@typescript-eslint/no-require-imports": ['error'],
    'filenames/match-regex': [2, "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(.steps)?(.d)?$"],
    "filenames/no-index": 2,
    "no-restricted-imports": ["error", {"patterns": ["../*"]}]
  }
};