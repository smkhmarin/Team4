var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    listingsRouter = require('../routes/listings.server.routes');
<<<<<<< HEAD
    usersRouter = require('../routes/user.server.routes');
=======
>>>>>>> janice

module.exports.init = function() {
  //connect to database
  mongoose.connect(config.db.uri);
<<<<<<< HEAD
  
=======

>>>>>>> janice
  //initialize app
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware 
  app.use(bodyParser.json());

<<<<<<< HEAD

  app.use('/',express.static('client'));

  
  /**TODO
  Serve static files */
  app.get('./listings',function(request,response)
  {
    res.send(listingData);
  });

  app.use('/api/listings',listingsRouter);
  app.use('/api/user', usersRouter);
  /**TODO 
  Use the listings router for requests to the api */

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.use('/',express.static('client'));
  app.use(function(req,res){
  res.redirect('/');
});
//app.listen(8080);
  return app;
};  
=======
  
  /**TODO
  Serve static files */
  app.use('/', express.static(path.join(__dirname,'/../../client')));
  
  /**TODO 
  Use the listings router for requests to the api */
  app.use('/api/listings', listingsRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
	res.sendFile(path.resolve('client/index.html'));  
  });

  return app;
};  
>>>>>>> janice
