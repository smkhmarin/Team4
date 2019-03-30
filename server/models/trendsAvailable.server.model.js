/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var trendAvailableSchema = new Schema({

name: {
    type: String, 
    required: true
}, 
placeType: { 
    code: Number,
    name: String
}, 
url: String, 
parentid: Number,
country: String,
woeid: Number,
countnryCode: String 

});



/* Use your schema to instantiate a Mongoose model */
var trendAvailable = mongoose.model('trendAvailable', trendAvailableSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = trendAvailable;
