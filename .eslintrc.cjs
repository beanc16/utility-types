module.exports = {
    env: {
        'node': true,
        'es2022': true
    },
    extends: 'plugin:@typescript-eslint/recommended',
    parser: '@typescript-eslint/parser',
    ignorePatterns: [
        '**/node_modules/*',
        '**/dist/*',            // For compiled versions of packages in the node monorepo
        '**/lib/*',             // For compiled versions of our packages hosted on GitHub Packages
        '**/coverage',          // For coverage reports
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
    },
};
