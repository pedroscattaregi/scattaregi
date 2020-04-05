'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map', //facilita debug

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ], 

    output: { //levanta o serviço em memória
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ], 
    module: { //recompilar sem ter que derrubar e levantar o serviço
        preLoaders: [{
            tests:/\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            tests:/\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
}