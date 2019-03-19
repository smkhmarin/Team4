//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  "db": {
    "uri": process.env.DB_URI , //place the URI of your mongo database here.
      "_id": "uf_listings.test",
      "user": "test",
      "db": "uf_listings",
      "roles": [
          {
              "role": "dbOwner",
              "db": "uf_listings"
          }
      ]
  },
  "twitter": {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  "port" : process.env.PORT || 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
