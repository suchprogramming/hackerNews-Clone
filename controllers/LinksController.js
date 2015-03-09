hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  $scope.addLink = function() {
    $scope.links.push({ name: $scope.linkName, rawUrl: $scope.rawUrl, id: $scope.links.length + 1, score: 0, comments: [] });
    $scope.linkName = null;
  };

  $scope.upVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score += 1;
  };

  $scope.downVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.score -= 1;
  };

});
