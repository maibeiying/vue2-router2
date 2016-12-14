var webpack = require('webpack');
var path = require('path');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
	entry: "./vue/main",
	output: {
		filename: "[name].js",
		path: path.join(__dirname, './public/dist')
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
            	loader: 'babel?presets=es2015'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
             vue : path.join(__dirname,'/node_modules/vue/dist/vue')
        }
	},
	plugins: [
		//单独生成html文件
        new HtmlWebpackPlugin({
        	title: "new APP",
            filename: 'index.html',//生成的html及存放路径，相对于path
            template: './views/index.html',//载入文件及路径
        }),
        // 使用browser-sync实时刷新页面
        /*new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['/'] }//会默认访问./index.html
        })*/
	]
}