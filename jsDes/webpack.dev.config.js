// 引入 node.js path文件 
const path = require('path')
// require 网页模板插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: './src/index.js',
    /*
      出口文件
      @param  __dirname  当前目录
      @param  filename   目录文件名
    */
    output: {
        path: __dirname,
        filename: './release/bundle.js' // release 文件夹运行时会自动创建
    },
    /*
      plugins插件列表，是一个数组
      @param  HtmlWebpackPlugin html模板
    */
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 自动生成的bundle.js 会自动注入到index.html
        })
    ],
    // 本地开发环境服务器
    devServer: {
        // 需要获取文件，从本地release文件夹里面获取
        contentBase: path.join(__dirname, "./release"), // 根目录
        open: true, // 自动打开浏览器
        port: 9000, // 端口
        // 代理(可以访问以api开头的端口，解决跨域问题)
        // 凡是以api开头的请求，都可以映射到9000端口
        // 9000端口无法访问8880，涉及跨域，使用代理devserver 
        // 在demo文件下运行http-server -p 8880
        proxy: {
            // 当你请求是以/v2开头的接口，则我帮你代理访问到https://api.douban.com
            '/v2/*': {
                target: 'https://api.douban.com', // 你接口的域名
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            }
        },
    },
    // 模块
    module: {
        // 规定
        rules: [{
            // 检验js文件
            test: /\.js?$/,
            // 忽略的文件
            exclude: /(node_modules)/,
            // 进行babel处理
            loader: 'babel-loader'
        }]
    }
}