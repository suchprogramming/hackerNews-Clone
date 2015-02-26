hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.link = UtilitiesFactory.findById(LinksFactory.links, $stateParams.linkId)
  $scope.addComment = function() {
    $scope.link.comments.push({ name: $scope.userName, commentData: $scope.commentData });
    $scope.userName = null;
    $scope.commentData = null;
  }
});
