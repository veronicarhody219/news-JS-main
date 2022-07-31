const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    loaders: [
        {
            // JS LOADER
            test: /\.js$/,
            loader: 'babel-loader?optional[]=runtime',
            exclude: /node_modules/,
        },
        {
            // ASSET LOADER
            test: /\.(woff|woff2|ttf|eot)$/,
            loader: 'file-loader',
        },
        {
            //IMAGE LOADER
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader',
        },
        {
            // HTML LOADER
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            //SCSS LOADER
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
        },
    ],
};
