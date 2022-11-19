const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin'); 
const webpack = require('webpack'); 
const CopyPlugin = require("copy-webpack-plugin");

/**
 * @type {webpack.Configuration}
 */
module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new GenerateSW({
            exclude: [
                /node_modules/
            ]
        }), 
        new CopyPlugin({
            patterns: [
                {
                    from: "./public/*", 
                    to: "./[name][ext]"
                }, 
            ] 
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        rootMode: "upward"
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", 
                    "css-loader",
                    "postcss-loader"
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        open: true, 
        port: 8080,
    }
};