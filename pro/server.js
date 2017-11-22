// var webpack - require('webapck');
// var server = require('webapck-dev-server');
// var config = require('./webpack.config.js');
//
// var con = webpack(config);
// var serve = new server(con,{
//   contentBase:__dirname+'/public'
// });
//
// serve.listen(3000);
var webpack = require('webpack');
var config = require('./webpack.config.js');
var Server = require('webpack-dev-server');

// config.entry.app.unshift('webpack-dev-server/client?http://localhost:4000/');

var web = webpack(config);
var serve = new Server(web,{
  contentBase:__dirname+'/public',
  stats:{
    colors:true,
    inline:true
  }
})

serve.listen(4000)
