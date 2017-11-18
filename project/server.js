var webpack = require('webpack');
var config = require('./webpack.config');
var Server = require('webpack-dev-server');

// config.entry.app.unshift('webpack-dev-server/client?http://localhost:4000/');

var web = webpack(config);
var serve = new Server(web,{
  contentBase:__dirname+'/public',
  stats:{
    colors:true,
    open:true
  }
})

serve.listen(4000)
