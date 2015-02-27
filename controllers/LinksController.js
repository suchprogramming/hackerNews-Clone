hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.upVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score += 1;
  },
  
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.downVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score -= 1;
  }

});
