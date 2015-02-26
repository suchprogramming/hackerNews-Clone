var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('links', {
    url: "/links",
    templateUrl: "partials/links.html",
    controller: 'LinksCtrl'
  });

  $stateProvider.state('link', {
    url: "/links/:id/comments",
    templateUrl: "partials/links.comments.html",
    controller: 'CommentsCtrl'
  });

});
