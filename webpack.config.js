const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry: {
        bundleApp: './src/app.js'
     
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]

}