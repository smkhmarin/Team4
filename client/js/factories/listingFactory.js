angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getTrendingTopics: function(location, topic) {
        console.log("FACTORY")
        console.log(location)

       if (location) {
            return $http.get('/api/twitter/trending'+ "?city=" + location.city + "&state=" + location.state);
        }
        else {
            return $http.get('/api/twitter/trending');
        }
    },
    getTweetsForTopic: function(topic, location) {

        topic = topic.replace(/#/g, "%23");

        let queryString = "";

        if (location) {
            queryString = "?city=" + location.city + "&state=" + location.state + "&topic=" + topic;
        }
        else {
            queryString = "?topic=" + topic;
        }
        console.log(queryString);
        return $http.get('/api/twitter/trending/tweets'+ queryString);
    },

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
		return $http.delete('/api/listings/' + id);
    }
  };

  return methods;
});
