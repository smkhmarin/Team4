<<<<<<< HEAD
require('dotenv').config();

=======
>>>>>>> janice
var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
<<<<<<< HEAD
  console.log('tespt');
  app.listen(config.port, function() {
    console.log('test');
    console.log('App listening on port', config.port);
  });
};
=======
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};
>>>>>>> janice
