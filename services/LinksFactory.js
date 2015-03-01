hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [
    { name: "A Cool Story From Google", rawUrl: "www.google.com", id: 1, score: 0, comments: [] },
    { name: "A Cool Story From Ars Technica", rawUrl: "www.arstechnica.com", id: 2, score: 0, comments: [] },
    { name: "A Cool Story about Becky", rawUrl: "www.google.com", id: 3, score: 0, comments: [] },
    { name: "A Cool Story Bro", rawUrl: "www.google.com", id: 4, score: 0, comments: [] },
    { name: "A Programming Story", rawUrl: "www.google.com", id: 5, score: 0, comments: [] },
    { name: "A Graphics Card Review", rawUrl: "www.google.com", id: 6, score: 0, comments: [] }
  ];
  factory.addLink = function() {
    factory.links.push({ name: factory.linkName, rawUrl: factory.rawUrl, id: factory.links.length + 1, score: 0, comments: [] });
    factory.linkName = null;
  };

  return factory;
});
