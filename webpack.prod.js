const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                },
                // styles: {
                //     name: 'styles',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true
                // }
            }
        }
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({ 
                                    broswer: 'last 5 versions'
                                }),
                                require('cssnano')()
                            ]
                        }
                    }
                    
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
    　　    filename: "[name].[chunkhash].css",
    　　    //chunkFilename: "[id].css"
    　　})
    ],
    output: {
        filename: '[name].[chunkhash].bundle.js',
    }
});