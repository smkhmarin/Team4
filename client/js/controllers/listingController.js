angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getTrendingTopics().then(function(response) {
        $scope.searchError = false;
        if (!response.error) {
            $scope.trendingTopics = response.data.topics;
            console.log("got it!");
        }
        else {
            console.log(error);
            $scope.searchError = error;
        }
    }, function(error) {
      console.log('Unable to retrieve trending:', error);
    });

    $scope.getLocationName = function() {
        console.log($scope.location);
        if ($scope.location) {
            return $scope.location.city + ", " + $scope.location.state;
        }
        return "the world";
    }

    $scope.searchTrending = function() {
        $scope.trendingTweets = false;
        Listings.getTrendingTopics($scope.newSearch).then(function(response) {
            $scope.searchError = null;
            console.log(response);
            if (!response.data.error) {
                $scope.trendingTopics = response.data.topics;
                $scope.location = response.data.location;
                console.log("got it!");
            }
            else {
                console.log(response.data.error);
                $scope.searchError = response.data.error;
            }
       }, function(error) {
            console.log('Unable to retrieve trending:', error);
      });
    };

    $scope.findTrendingTweets = function(topic) {
        Listings.getTweetsForTopic(topic, $scope.location).then(function(response) {
            console.log("uhhhhh....");
            console.log(response);
            $scope.trendingTweets = response.data.statuses;
        }, function(error) {
            console.log("could not load tweets!");
        });
    };
  }
]);
