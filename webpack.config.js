module.exports = {
    mode: 'production',
    // devtool: 'eval-source-map',
    entry: {
        index: './src/index.js'
        // ,
        // huobi: './src/huobi.js'
    },
    output: {
        filename: '[name].js',
        // eslint-disable-next-line no-undef
        path: __dirname + '/dist'
    }
};