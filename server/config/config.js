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
  "port" : process.env.PORT || 8080
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
