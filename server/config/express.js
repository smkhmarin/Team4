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

  // session setup

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  app.use('/assets', express.static(path.join(__dirname,'/../../client')));

  const requireLoggedIn = function(req, res, next) {
    console.log("I ran!!!!");
    if (req.session.username) {
      next();
    }
    else {
      res.redirect("/login");
    }
  };

  app.use('/api/user', usersRouter);
  app.use('/api/twitter', twitterRouter);

  app.get('/signup', function(req, res) {
      console.log("shoulda redirectd here huh");
    res.sendFile(path.resolve('client/signup.html'));
  });

  app.get('/login', function(req, res) {
    res.sendFile(path.resolve('client/login.html'));
  });

  app.all('/*', requireLoggedIn, function(req, res) {
  	res.sendFile(path.resolve('client/index.html'));
  });

  return app;
};
