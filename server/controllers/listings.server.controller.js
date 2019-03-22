<<<<<<< HEAD
/* Dependencies */
var mongoose = require('mongoose'),
=======

/* Dependencies */
var mongoose = require('mongoose'), 
>>>>>>> janice
    Listing = require('../models/listings.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
<<<<<<< HEAD
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
  HINT: if you are struggling with implementing these functions, refer back to this tutorial
=======
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions, refer back to this tutorial 
>>>>>>> janice
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);


  /* Then save the listing */
  listing.save(function(err) {
<<<<<<< HEAD
    if(err) 
      res.status(400).send(err);
    else {
=======
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
>>>>>>> janice
      res.json(listing);
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing */
exports.update = function(req, res) {
  var listing = req.listing;
<<<<<<< HEAD
  /** TODO **/
  /* Replace the article's properties with the new properties found in req.body */
  /* Save the article */
  var listingFind = Listing.find({'code':req.listing.code});

    Listing.update(listingFind, req.body, function(err) {
    if (err)
      res.status(400).send(err);
        else {
        Listing.findOne({code: req.body.code}, function(err, updatedListing) {
                if (err)
              res.status(400).send(err);
                else {
                    res.json(updatedListing);
                }
            });
    }
  });
};
/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;
    Listing.findOneAndRemove({ code: req.listing.code }, function(err, oldListing) {
    if (err)
      res.status(400).send(err);
        else {
            res.status(200).send();
        }
  });
=======

  /** TODO **/
  /* Replace the article's properties with the new properties found in req.body */
  /* Save the article */
  
  listing.code = req.body.code;
  listing.name = req.body.name;
  listing.address = req.body.address;
  listing.coordinates = req.body.coordinates;  
  
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } else {
	  res.json(listing);
    }
  })
  
};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;

  /** TODO **/
  /* Remove the article */
  Listing.remove({code: listing.code}, function(err) {
    if(err) {
      console.log(err);
      res.status(404).send(err);
    } 
	else {
      res.status(200);
	  res.json(listing);
    }
  });
  
>>>>>>> janice
};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
<<<<<<< HEAD
    Listing.find({}).sort({code: 1}).exec(function(err, listings) {
    if (err)
      res.status(400).send(err);
        else {
            res.json(listings);
        }
  });
};

/*
  Middleware: find a listing by its ID, then pass it to the next request handler.
  Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
=======
  /** TODO **/
  /* Your code here */
  Listing.find().sort({code: 1}).exec(function(err, results) {
    if(err) {
		console.log(err);
		res.status(404).send(err);
    }
    else {
		res.json(results);
    }
  });
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
>>>>>>> janice
        then finally call next
 */
exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};