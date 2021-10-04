const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
//const { WebpackOpenBrowser } = require('webpack-open-browser');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/JS/index.js',
    mode: 'development',
    output: {
        //path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, '../pizzaApp/pizzaCompany/static/JS/'),
        filename: 'bundle.js',
        //clean: true,
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            /*{
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[name].[ext]'
                    }
                }]
            }*/
        ]
    },
/*    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
    },*/
    plugins: [


        new miniCss({
            filename: '../CSS/style.css',
        }),
   /*     new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),*/

    ]
};