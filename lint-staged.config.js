export default {
  '**/*.{ts,tsx,js,jsx}': [
    'tsc-files --noEmit --strict',
    'eslint --max-warnings=0 --fix',
    'prettier --write',
  ],
};