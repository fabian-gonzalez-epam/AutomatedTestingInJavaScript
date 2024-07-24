export default [
    {
        files: ['src/**/*.js'],
        ignores: ['**/*.conf.js'],
        rules: {
            'no-undef': 'warn',
            'no-unused-vars': 'warn',
            //'prefer-const': ['warn', { ignoreReadBeforeAssign: true }],
            semi: ['warn', 'never'],
        },
    },
];
