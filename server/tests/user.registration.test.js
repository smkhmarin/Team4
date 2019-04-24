var should = require('should'), 
	expect = require('chai').expect,
	request = require('supertest'),
    mongoose = require('mongoose'), 
    User = require('../models/user.server.model'), 
    config = require('../config/config');
	
var app = express.init();
var agent = request.agent(app);
	

const userCredentials = {
	username: 'test',
	firstName: ,
	lastName: ,
	email: ,
	password: 'test'
}

var authenticatedUser = request.agent(app);

describe('Account registration', function() {
	this.timeout(10000);
	it('register', registered())
	it('should be able to register', function(done) {
		agent
			.expect(302)
			.end(done)
	})
	
});

function registered() {
	return function(done) {
		agent
			.post('/signup')
			.sent(userCredentials)
			.expect(302)
			.end(done)
	}
}