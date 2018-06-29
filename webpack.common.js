const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// return;
module.exports = {
    entry: {
        home: './src/pages/home/home.js',
        login: './src/pages/login/login.js'
    },
    module: {
        rules: [
            /**
             * 脚本转义
             */
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugins: ["transform-runtime"]
                        }
                    }
                ]
            },
            /**
             * 图片
             */
            {
                test:/\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
    
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            chunks: ['home'],
            template: './src/pages/home/home.html',
            filename: 'home.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['login'],
            template: './src/pages/login/login.html',
            filename: 'login.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    }

};