// base config for all webpack configs for server and client apps

module.exports = {
    //below line informs webpack to run babel to all files/ modules
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    ['env',{targets: {browsers: ['last 2 versions']}}]    
                ]
            }
        }]
    }
};