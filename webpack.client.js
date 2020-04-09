// This module create js bundle for browsers so that they can load react app
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const config = {
    //below line informs webpack where to start converting JSX to normal js into bundle.js
    entry: './src/client/client.js',
    //below line informs webpack where to out bundle.js
    output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);