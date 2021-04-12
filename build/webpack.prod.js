const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

const prodConfig = {
    mode: "production",
    // 打包的入口
}
module.exports = merge(baseConfig,prodConfig)