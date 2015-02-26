hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $stateParams, UtilitiesFactory, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
});
