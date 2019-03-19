angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
	 var newEntry = {
			"code": $scope.newListing.code, 
			"name": $scope.newListing.name, 
			"address": $scope.newListing.address};
			
	 $scope.listings.push(newEntry);
	 Listings.create(newEntry).success(function() {
		Listings.getAll().then(function(response) {
		  $scope.listings = response.data;
		}, function(error) {
		  console.log('Unable to retrieve listings:', error);
		});
	 }).error(function(error) {
		console.log(error);
	 });
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
	   
		var i = $scope.listings.indexOf(id);
		$scope.listings.splice(i, 1);
		Listings.delete(id._id).success(function() {
			console.log('Success');
		}).error(function(error) {
			console.log(error);
		});
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);