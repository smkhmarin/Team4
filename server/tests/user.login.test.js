var should = require('should'), 
	expect = require('chai').expect,
	request = require('supertest'),
    mongoose = require('mongoose'), 
    User = require('../models/user.server.model'), 
	express = require('../config/express'),
    config = require('../config/config');
	
var app = express.init();
var agent = request.agent(app);
	

const userCredentials = {
	username: 'test',
	password: 'test'
}

const badUserCredentials = {
	username: 'does_not_exist',
	password: 'does_not_exist'
}

var authenticatedUser = request.agent(app);

describe('Logging in test', function() {
	this.timeout(10000);
	it('login', loggedIn())
	it('should be able to login', function(done) {
		agent
			.get('/index')
			.expect(302)
			.end(function(err, res) {
				if(err) {
					return err
				}
				done()
			})
	});
	
	it('should not be able to login', function(done) {
		agent
			.send(badUserCredentials)
			.expect(302)
			.end(function(err, res) {
				if(err) {
					return err
				}
				done()
			})
	});
});

function loggedIn() {
	return function(done) {
		agent
			.post('/login')
			.sent(userCredentials)
			.expect(302)
			.end(done)
	}
}