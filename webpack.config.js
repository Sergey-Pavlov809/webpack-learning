var HtmlWebpackPlugin = require('html-webpack-plugin');
//const MinifyPlugin = require('babel-minify-webpack-plugin');
var path = require('path');

module.exports={
    entry:'./src/main.ts',
    output:{ 
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use:[
              {
                  loader:'ts-loader'
              }
          ],
        },

          {
            test:/\.(s*)css$/,
            use:[
                {
                    loader:'style-loader',
                    options:{
                        injectType:'singletonStyleTag'
                    }
                },
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test:/\.(png|svg|jpg|git|jpe?g)$/,
            use:[
                {
                    options:{
                        outputPath:'img/'
                    },
                    loader:'file-loader'
                }
            ]
        }
      ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html',      title: 'Development',}),
    ]
}
