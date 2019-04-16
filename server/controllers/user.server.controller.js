const mongoose = require('mongoose'),
    User = require('../models/user.server.model.js');
var crypto = require('crypto');

exports.create = function(req, res) {
    // accept password, hash/salt it, save to db
	console.log("signup works");
	console.log(req.body);
	let newUser = new User();
	
	newUser.username = req.body.username;
	newUser.firstName = req.body.firstName;
	newUser.lastName = req.body.lastName;
	newUser.email = req.body.email;
	newUser.setPassword(req.body.password);
	
	newUser.save(function(err) {
		if(err) {
			console.log("error creating user");
		} else {
			res.redirect("/login");
		}
	});
}

exports.login = function(req, res) {
    // check pw hashes match, create session cookie
	User.findOne({ username : req.body.username }, function(err, user) { 
        if (user === null) { 
            console.log("User " + req.body.username + " does not exist");
        } 
        else { 
            if (user.validPassword(req.body.password)) { 
                console.log("Logged in");
				res.redirect('/');
            } 
            else { 
                console.log("Incorrect password");
            } 
        } 
    });
}

exports.logout = function(req, res) {
    // destroy session
}

exports.read = function(req, res) {
    res.json(req.user);
}

exports.update = function(req, res) {
    var updateUser = req.user;
	updateUser.firstName = req.body.firstName;
	updateUser.lastName = req.body.lastName;
	
	//way to update password?
	//finish this task for sprint 3 (not necessary for sprint 2)
	updateUser.save(function(err) {
		if(err) {
			console.log("error updating user");
		} else {
			res.json(updateUser);
		}
	});
}

exports.delete = function(req, res) {
    // delete user (need to confirm ownership!)
	//this is probably wrong
	//can be completed sprint 3
	var user = req.user;
	if (user.validPassword(req.body.password)) { 
        user.remove(function(err) {
			if(err) {
				console.log("Delete failed");
			} else {
				console.log("User deleted");
			}
		});
    } else { 
        console.log("Incorrect password");
    } 
}
