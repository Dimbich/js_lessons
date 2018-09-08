 const path = require('path');
 var webpack = require('webpack');
 module.exports = {
    entry: './js/src/script.js',
    output: {
        path: path.join(__dirname, './js/bundle/'),
        filename: 'bundle.js',
        publicPath: './js/bundle/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                            ['env', {
                                targets: {
                                browsers: "> 3%" // можно и указать конкретные браузеры
                                }
                            }]
                            ]
                        }
                    }
                ]
            }
        ]
    }

}