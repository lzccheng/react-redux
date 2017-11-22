let path = require('path');

module.exports = {
  entry:{
    main:__dirname+'/src/main'
  },
  output:{
    path:__dirname+'/public/js',
    filename:'[name].js'
  },
  devServer:{
    contentBase:__dirname+'/public',
    port:3000
  },
  module:{
    rules:[
      {
        test:/\.js$|\.jsx$/,
        use:{loader:'babel-loader'}
      }
    ]
  }
}
