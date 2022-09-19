const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // development production
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [{
            /* jsx js */
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {presets: ['@babel/preset-env', '@babel/preset-react']}
            }
        }, {
            /* 字形 */
            test: /\.(woff|woff2|ttf|eot|otf)$/,
            exclude: /node_modules/,
            type: 'asset/resource',
            dependency: {not: ['url']}
        }, {
            /* css */
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        /* html */
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        /* 複製資料夾*/
        new CopyPlugin({
            patterns: [{
                from: "public",
                noErrorOnMissing: true,
                globOptions: {
                    ignore: ['**/index.html']
                }
            }]
        })
    ]
}