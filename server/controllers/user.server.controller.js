const mongoose = require('mongoose'),
    User = require('../models/user.server.model.js');

exports.create = function(req, res) {
    // accept password, hash/salt it, save to db
}

exports.login = function(req, res) {
    // check pw hashes match, create session cookie
}

exports.logout = function(req, res) {
    // destroy session
}

exports.read = function(req, res) {
    // returns user
}

exports.update = function(req, res) {
    // updates user info
}

exports.delete = function(req, res) {
    // delete user (need to confirm ownership!)
}
