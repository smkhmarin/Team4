const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
var crypto = require('crypto');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
	passwordSalt: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	}
});

userSchema.methods.setPassword = function(password) {
	//create a unique salt for each user
	this.passwordSalt = crypto.randomBytes(16).toString('hex'); 
	
	//hash the salt and password
    this.passwordHash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`).toString(`hex`); 
};

userSchema.methods.validPassword = function(password) { 
    var passwordHash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 64, `sha512`).toString(`hex`); 
    console.log(this.passwordHash === passwordHash);
    return this.passwordHash === passwordHash; 
}; 

const User = mongoose.model('User', userSchema);
module.exports = User;
