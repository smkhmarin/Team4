const mongoose = require('mongoose')
const allCities = require("all-the-cities")

const Twitter = require('twitter');

const client = new Twitter({
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

function getCoordinatesFromCityState(cityName, state) {
    let cities = allCities.filter(function(city) {
        let rgx = new RegExp(cityName, "i");
        if (city.name.match(rgx) && city.adminCode == state && city.country == "US") {
            return true;
        }
        return false;
    });

    if (cities.length != 0) {
        return cities[0];
    }
    return false;
}

exports.currentlyTrending = function(req, res) {
    var woe = 1;

    if (req.query.state && req.query.city) {
        // find lat/long of city, then query closest location with trends, then search for the trends at that woe
        let city = getCoordinatesFromCityState(req.query.city, req.query.state);

        if (city) {
            client.get('trends/closest', {lat: city.lat, long: city.lon}, function(error, places, response) {
                if (error) {
                    console.log(error);
                    res.json({error: "Twitter API not available. Try again later."});
                }
                if (places.length != 0) {
                    console.log(places[0]);
                    woe = places[0].woeid;

                    client.get('trends/place', {id: woe}, function(error, tweets, response) {
                        if (!error) {
                            tweets[0]["trends"].filter((tweet) => {
                            });
                            // filter down results to only show what we need!
                            res.json({topics: tweets[0]["trends"], location: {city: city.name, state: city.adminCode}, woe: woe});
                        }
                        else {
                            res.json({error: "Could not find trends near location."});
                        }
                    });
                }
                else {
                    // something messed up, no close places?

                    res.json({error: "Could not find trends near location."});
                }
            });
        }
        else {
            // sent 'city not found' to client
            res.json({error: "City not found. Check your spelling."});
        }
    }
    else {
        client.get('trends/place', {id: woe}, function(error, tweets, response) {
            if (!error) {
                tweets[0]["trends"].filter((tweet) => {
                });
                // filter down results to only show what we need!

                res.json({topics: tweets[0]["trends"], location: "the world", woe: woe});
            }
            else {
                console.log(error);
            }
        });
    }
}

exports.trendingTweets = function(req, res) {
    // expect params topic, and additionally expect location as well, possibly
    if (!req.query.topic) {
        console.log(req);
        // shouldnt b possible but should handle it anyway
        console.log("bad stuff!")
        res.json({error: "please provide a topic"});
    }
    else if (req.query.city && req.query.state) {
        console.log("got em babyyy!")
        let city = getCoordinatesFromCityState(req.query.city, req.query.state);

        if (city) {
            const formattedLatLong = city.lat + "," + city.lon + "," + "25mi";

            const params = {
                q: req.query.topic,
                geocode: formattedLatLong
            };

            client.get('search/tweets', params, function(error, tweets, response) {
                if (!error) {
                    console.log("gottem");
                    res.json(tweets);
                }
                else {
                    res.json({error: "Something went wrong."});
                }

            });
        }
        else {
            //res.json({error: "sorry pal"});
        }
    }
    else {
        // show global
        const params = {
            q: req.query.topic,
        };

        client.get('search/tweets', params, function(error, tweets, response) {
            if (!error) {
                console.log("gottem");
                res.json(tweets);
            }
            else {
                res.json({error: "Something went wrong."});
            }

        });
 
    }
}
