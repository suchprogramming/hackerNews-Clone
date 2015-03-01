hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  $scope.upVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score += 1;
    console.log($scope.link.score);
  }
  
  $scope.downVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score -= 1;
  }
});
