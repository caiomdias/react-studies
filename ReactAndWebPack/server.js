'use-strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { color:true }, 
}).listen(3000, (er) => {
    if(er) {
        return console.log(er)
    }
    console.log('LINSTEN ON -> http://localhost:3000')
})