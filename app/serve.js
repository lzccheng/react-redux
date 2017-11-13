const serve = require('serve');

const server = serve(__dirname+'/build',{
  port:3338,
  ignore:['node_modules']
});
