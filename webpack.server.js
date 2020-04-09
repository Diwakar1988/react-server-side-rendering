// This module allows us to run our JSX code on server side
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    //below line informs webpack that we're building a bundle for node not for browser
    target: 'node',
    //below line informs webpack where to start converting JSX to normal js into bundle.js
    entry: './src/index.js',
    //below line informs webpack where to out bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = merge(baseConfig, config);