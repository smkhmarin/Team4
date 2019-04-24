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
	firstName: 'test',
	lastName: 'test',
	email: 'test',
	password: 'test'
}

const badUserCredentials = {
	firstName: 'test',
	lastName: 'test',
	email: 'test',
	password: 'test'
}

var authenticatedUser = request.agent(app);

describe('Account registration', function() {
	this.timeout(10000);
	it('register', registered())
	it('should be able to register', function(done) {
		agent
			.post('/signup')
			.expect(302)
			.expect('Location', '/login')
			.end(done)
	})
	
	it('should not be able to register', function(done) {
		agent
			.post('/signup')
			.send(badUserCredentials)
			.expect(302)
			.end(done)
	})
	
});

function registered() {
	return function(done) {
		agent
			.post('/signup')
			.send(userCredentials)
			.expect(302)
			.end(done)
	}
}