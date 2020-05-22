const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.ts');
const path = require('path');

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'sheets.bundle.prod.js'
    },
    mode: "production",
});
