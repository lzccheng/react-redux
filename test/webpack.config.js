let webpack = require('webpack');
module.exports = {
  entry: {
    main:__dirname + '/src/main.js'
  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].js"
  },
  devServer:{
    port:8088,
    contentBase:'./public',
    open:true,
    inline:true,
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.jsx$|\.js$/,
        use:{loader:'babel-loader'}
      }
    ]
  },
}
