hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;

  window.onload = function() {
    var scoreDecay = function() {
      for (i = 0; i < $scope.links.length; i++) {
        $scope.links[i].score -= 1;
      }
      console.log($scope.links[0].score);
      $scope.$apply();
    }
    window.setInterval(scoreDecay, 5000);
  };

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

  $scope.pinStory = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.isPinned = !$scope.link.isPinned;
    console.log($scope.link.isPinned);
  }

});
