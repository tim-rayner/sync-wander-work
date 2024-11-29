module.exports = {
    root: true,

    ignorePatterns: [
        'node_modules',
        '*.js',
        'dist',
        '.nuxt',
        'vendor'
    ],

    plugins: [
        'anti-trojan-source',
        'security-node',
        '@stylistic/ts'
    ],

    extends: [
        'plugin:promise/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:vue/vue3-recommended',
        'plugin:anti-trojan-source/recommended',
        'plugin:security-node/recommended'
    ],

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
        extraFileExtensions: ['.vue']
    },

    rules: {
        // https://eslint.org/docs/rules/
        'no-return-assign': 'off',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'semi': 'off',
        'indent': 'off',
        'no-void': 'off',
        'no-unused-expressions': 'off',
        'space-before-function-paren': [
            'error', {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'no-trailing-spaces': 'warn',
        'no-any': 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': 'off',
        'prefer-rest-params': 'warn',
        'no-extra-parens': 'off',
        'quotes': 'off',
        'func-call-spacing': 'off',
        'camelcase': 'off',
        'comma-spacing': 'off',
        'keyword-spacing': 'off',
        'object-curly-spacing': ['warn', 'always'],
        'comma-dangle': ['warn', 'never'],
        'max-len': ['warn', 120],
        'eqeqeq': 'error',
        'lines-between-class-members': 'off',

        // https://eslint.style/packages/ts#rules
        '@stylistic/ts/indent': ['warn', 4],
        '@stylistic/ts/semi': 'error',
        '@stylistic/ts/comma-spacing': 'warn',
        '@stylistic/ts/keyword-spacing': 'warn',
        '@stylistic/ts/member-delimiter-style': 'warn',
        '@stylistic/ts/type-annotation-spacing': 'warn',
        '@stylistic/ts/func-call-spacing': ['error', 'never'],
        '@stylistic/ts/quotes': ['warn', 'single'],
        '@stylistic/ts/no-extra-parens': 'error',

        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['error', {'allowArgumentsExplicitlyTypedAsAny': true}],
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-imports': ['error', {prefer: 'type-imports'}],
        '@typescript-eslint/naming-convention': ['error',
            {
                selector: 'default',
                format: ['camelCase']
            },
            {
                selector: 'objectLiteralProperty',
                format: ['camelCase', 'PascalCase']
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'import',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'parameter',
                format: null,
                filter: {
                    regex: '^_.*',
                    match: true
                }
            }
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', {
            allowNumber: true,
        }],

        // https://eslint.vuejs.org/rules/
        // if unsure and eslint doesn't cover it please refer to https://v3.vuejs.org/style-guide/
        'vue/html-indent': ['warn', 4],
        'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
        'vue/match-component-file-name': [
            'error', {
                extensions: ['jsx', 'vue']
            }
        ],
        'vue/new-line-between-multi-line-property': 'warn',
        'vue/max-attributes-per-line': [
            'warn', {
                'singleline': {
                    'max': 3
                },
                'multiline': {
                    'max': 1
                }
            }
        ],
        'vue/first-attribute-linebreak': ['warn', {
            'singleline': 'ignore',
            'multiline': 'beside'
        }],
        'vue/multi-word-component-names': 'off',
        'vue/no-boolean-default': ['error', 'default-false'],
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'warn',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-potential-component-option-typo': [
            'error', {
                presets: ['vue', 'vue-router']
            }
        ],
        'vue/no-reserved-component-names': [
            'error', {
                'disallowVueBuiltInComponents': true,
                'disallowVue3BuiltInComponents': true
            }
        ],
        'vue/no-template-target-blank': ['error', {
            'allowReferrer': true,
            'enforceDynamicLinks': 'always'
        }],
        'vue/no-unsupported-features': [
            'error', {
                'version': '^3.4.0'
            }
        ],
        'vue/no-useless-mustaches': 'warn',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'warn',
        'vue/require-name-property': 'error',
        'vue/v-for-delimiter-style': 'error',
        'vue/v-on-event-hyphenation': 'error',
        'vue/v-on-function-call': [
            'error', 'never', {
                'ignoreIncludesComment': true
            }
        ],
        'vue/eqeqeq': 'error',
        'vue/no-extra-parens': 'warn',
        'vue/html-closing-bracket-newline': [
            'error', {
                'singleline': 'never',
                'multiline': 'never'
            }
        ],
        'vue/script-setup-uses-vars': 'off', // enable if using setup syntax

        // https://github.com/francoismassart/eslint-plugin-tailwindcss
        'tailwindcss/no-custom-classname': 'off',

        // https://github.com/eslint-community/eslint-plugin-promise/blob/main/README.md#rules
        'promise/always-return': 'off'
    }
};
