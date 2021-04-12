
const baseConfig = require('./webpack.base.js')

const merge = require('webpack-merge')

const  webpack = require('webpack')

const devConfig = {
    mode: "development",
    // 打包的入口
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    // 打包的出口
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(baseConfig, devConfig)