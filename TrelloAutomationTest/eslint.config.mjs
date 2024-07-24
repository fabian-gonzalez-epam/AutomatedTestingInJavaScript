export default [
    {
        files: ['src/**/*.js'],
        ignores: ['**/*.conf.js'],
        rules: {
            //'no-undef': 'error',
            'no-unused-vars': 'warn',
            semi: 'warn',
        },
    },
];
