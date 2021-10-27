const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');

const dist = path.join(__dirname, 'dist');
const drawPath = path.resolve(__dirname, 'node_modules/@olympeio/draw');

const common = {
    entry: './src/main.js',
    output: {path: dist, globalObject: 'this'},
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.js$/, enforce: "pre", use: "source-map-loader"},
            {test: /\.js$/, enforce: "pre", use: "webpack-import-glob-loader"},
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env", "@babel/react"] }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            '@olympeio': path.resolve(__dirname, 'node_modules/@olympeio'),
            'olympeio-extensions':   path.resolve(__dirname, 'node_modules/@olympeio-extensions')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Copy({patterns: [
            {from: 'res'}
        ]})
    ]
};

const server = {
    devServer: {
        contentBase: dist,
        writeToDisk: true,
        compress: true,
        port: 8888
    }
};

const draw = {
    name: 'draw',
    resolve: {
        alias: {olympe: drawPath}
    },
    plugins: [
        new Copy({patterns: [
            {from: drawPath + '/images', to: 'images'},
            {from: drawPath + '/fonts', to: 'fonts'},
            {from: drawPath + '/css', to: 'css'},
            {from: drawPath + '/doc', to: 'doc'}
        ]})
    ]
};

const web = {
    name: 'web',
    resolve: {
        alias: {olympe: path.resolve(__dirname, 'node_modules/@olympeio/runtime-web')}
    }
};

const node = {
    name: 'node',
    target: 'node',
    resolve: {
        alias: {olympe: path.resolve(__dirname, 'node_modules/@olympeio/runtime-node')}
    }
};

module.exports = [merge(common, server, draw), merge(common, server, web), merge(common, node)];
