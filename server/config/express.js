var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    config = require('./config'),
    usersRouter = require('../routes/user.server.routes'),
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
  app.use(bodyParser.urlencoded());

  app.use('/', express.static(path.join(__dirname,'/../../client')));

  app.use('/api/user', usersRouter);
  app.use('/api/twitter', twitterRouter);

  app.get('/signup', function(req, res) {
    res.sendFile(path.resolve('client/signup.html'));
  });

  app.get('/login', function(req, res) {
    res.sendFile(path.resolve('client/login.html'));
  });

  app.all('*', function(req, res) {
  	res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
