var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    usersRouter = require('../routes/user.server.routes');
    twitterRouter = require('../routes/twitter.server.routes');

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);
  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

  
  /**TODO
  Serve static files */
  app.use('/', express.static(path.join(__dirname,'/../../client')));

  app.use('/api/user', usersRouter);
  app.use('/api/twitter', twitterRouter);
  /**TODO 
  Use the listings router for requests to the api */

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));  
  });

  return app;
};  
