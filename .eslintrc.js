/* eslint-env node */

module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: true,
            },
        ],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
