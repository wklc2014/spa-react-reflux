'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'reflux',
            'react-router',
            'classnames',
            'qwest',
            'axios',
            'lodash',
            'keymirror',
            'mockjs',
            'antd',
            'pretender'
        ],
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve('./dist/', 'vendor.manifest.json'),
            name: '[name]',
            context: __dirname,
        })
    ],
    stats: {
        cached: true,
        chunks: false,
        colors: true
    }
};