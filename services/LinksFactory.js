hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [];
  factory.addLink = function() {
    factory.links.push({ name: factory.linkName, rawUrl: factory.rawUrl, id: factory.links.length + 1, score: 0, comments: [] });
    console.log(factory.links);
    factory.linkName = null;
  };

  return factory;
});
