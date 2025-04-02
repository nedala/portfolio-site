module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'off',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'sort-imports': 'off',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'simple-import-sort/imports': 'off',
    '@next/next/inline-script-id': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
