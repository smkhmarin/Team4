const mongoose = require('mongoose')

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET
});


exports.search = function(req, res) {
    var params = {screen_name: 'nodejs'};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            res.json(tweets);
        }
    });
}
