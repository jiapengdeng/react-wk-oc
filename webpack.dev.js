const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true
    },
    module: {
        rules: [
            /**
             *  css  前缀和抽离 
             */
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});