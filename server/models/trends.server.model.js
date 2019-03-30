/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var trendSchema = new Schema({
trends:
{
    name: {
        type: String, 
        required: true
    }, 
    url: String, 
    promoted_content: String, 
    query: String,
    tweet_volume: Number
},
as_of: Date,
created_at: Date,
locations:{
    name: String, 
    woeid: Number
} 
});



/* Use your schema to instantiate a Mongoose model */
var trend = mongoose.model('trend', trendSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = trend;
