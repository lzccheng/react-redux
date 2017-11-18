var Html = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry:{
    app:'webpack-dev-server/client?http://localhost:8099/',
    index:__dirname+'/src/main.js'
  },
  output:{
    path:__dirname+'/public/js',
    filename:'[name].js',
    publicPath:__dirname+'/public'
  },
  module:{
    rules:[
      {
        test:/\.js$|\.jsx$/,
        use:[
          {loader:'babel-loader'}
        ]
      }
    ]
  },
  plugins:[
    new webpack.BannerPlugin('lzccheng@版权所有，翻版必究'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
