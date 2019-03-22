angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
<<<<<<< HEAD
      return $http.get('/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('/api/listings', listing);
=======
      return $http.get('http://localhost:8080/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('http://localhost:8080/api/listings', listing);
>>>>>>> janice
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
<<<<<<< HEAD
      return $http.delete('/api/listings/' +id),$http.get('/api/listings');
=======
		return $http.delete('http://localhost:8080/api/listings/' + id);
>>>>>>> janice
    }
  };

  return methods;
});
