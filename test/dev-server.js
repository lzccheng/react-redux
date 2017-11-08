let config = require('./webpack.config.js');
let webpack = require('webpack');
let devServer = require('webpack-dev-server');

let compiler = webpack(config);
let server = new devServer(compiler,{
  publicPath:config.output.publicPath,
  stats:{
    colors:true,
    contentBase:'./public',
  }
});
server.listen(8088);
