module.exports = {
    parser: '@typescript-eslint/parser',
    extends: 'airbnb',
    plugins: [ '@typescript-eslint', 'react-hooks' ],
    globals: {
        __DEV__: true,
        __APP_VERSION__: true,
        __BUILD_TARGET__: true,
        window: true,
        document: true,
        PUBLIC_PATH: true,
        FileReader: true,
        page: true,
        browser: true,
        context: true,
        GuanDataSDK: true,
        React: true,
    },
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'semi': [ 2, 'never' ],
        'space-before-function-paren': [ 2, 'always' ],
        'spaced-comment': [ 'error', 'always' ],
        'no-multi-spaces': 'error',
        'no-unused-expressions': [ 2, { allowShortCircuit: true, allowTernary: true } ],
        'array-bracket-spacing': [ 2, 'always' ],
        'arrow-parens': 'off',
        'no-param-reassign': 0,
        'no-undef': 0,
        'no-mixed-operators': 'off',
        'prefer-promise-reject-errors': 0,
        'no-return-assign': 0,
        'max-len': [ 2, { code: 120, ignoreComments: true, ignorePattern: '(Pick<|Apollo\\.|query)' } ],
        'quote-props': [ 2, 'consistent-as-needed' ],
        'eqeqeq': [ 2, 'smart' ],
        'new-cap': 0,
        'camelcase': 0,
        'no-else-return': 0,
        'no-confusing-arrow': 0,
        'react/prop-types': 0,
        'react/jsx-quotes': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-indent': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-first-prop-new-line': 'off',
        'react/prefer-stateless-function': 'off',
        'react/jsx-pascal-case': 0,
        'react/sort-comp': 'off',
        'jsx-quotes': [ 2, 'prefer-double' ],
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/no-string-refs': 0,
        'no-underscore-dangle': 0,
        'import/prefer-default-export': 0,
        'generator-star-spacing': 0, // Disable for now, there is still issue of this rule in eslint
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 2,
        'indent': 'off',
        '@typescript-eslint/indent': [ 'error' ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [ 'error' ],
        'no-shadow': 'off',
        'object-curly-newline': [ 'error', { multiline: true } ],
        '@typescript-eslint/no-shadow': [ 'error' ],
        'react/destructuring-assignment': [ 0, 'always' ],
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    parserOptions: { ecmaFeatures: { legacyDecorators: true } },
    settings: {
        'import/extensions': [ '.js', '.jsx', '.ts', '.tsx' ],
        'import/resolver': { node: { extensions: [ '.js', '.jsx', '.ts', '.tsx' ] } },
    },
}
