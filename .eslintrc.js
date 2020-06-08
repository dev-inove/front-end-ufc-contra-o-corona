module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        semi: ['error', 'never'],
        indent: ['error', 4],
        'import/extensions': 'off',
        'arrow-parens': 'off',
        'comma-dangle': ['error', 'never'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
