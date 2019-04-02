angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
      $scope.myData = {
          // Chart.js data structure goes here
          // e.g. Pie Chart Data Structure http://www.chartjs.org/docs/#doughnut-pie-chart-data-structure
          labels: [
              "-7d",
              "-6d",
              "-5d",
              "-4d",
              "-3d",
              "-2d",
              "-1d",
              "0d",
          ],
          datasets: [
              {
                  label: "Tweet volume",
                  data: [],
                  backgroundColor: [
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                 ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                      "#FF6384",
                  ]
              },
              {
                  label: "Retweet volume",
                  data: [],
                  backgroundColor: [
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                  ],
                  hoverBackgroundColor: [
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                      "#36A2EB",
                  ]
              },{
                  label: "Retweet volume",
                  data: [],
                  backgroundColor: [
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                  ],
                  hoverBackgroundColor: [
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                      "#FFCE56",
                  ]
              },
 
          ]
      };

      $scope.myOptions =  {
      };

      $scope.myPlugins = [{
      }];

      $scope.onChartClick = function (event) {
          console.log(event);
      };

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

    $scope.generateSampleData = function() {
            for (let j = 0; j < 3; j++) {
                $scope.myData.datasets[j].data = [];
                for (let i = 0; i < 9; i++) {
                    $scope.myData.datasets[j].data.push(Math.round(Math.random() * 100000 + 1500));
                    let prefix = "";
                    if (j == 0) {
                        prefix = "Tweet volume";
                    }
                    else if (j == 1) {
                        prefix = "Retweet volume";
                    }
                    else {
                        prefix = "Favorite volume"
                    }
                    $scope.myData.datasets[j].label = prefix;
               }
           }
    };

    $scope.findTrendingTweets = function(topic) {
        Listings.getTweetsForTopic(topic, $scope.location).then(function(response) {
            console.log("uhhhhh....");
            console.log(response);
            $scope.trendingTweets = response.data.statuses;
            $scope.generateSampleData();
        }, function(error) {
            console.log("could not load tweets!");
        });
    };
  }
]);
