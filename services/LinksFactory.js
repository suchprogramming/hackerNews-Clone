hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] },
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] },
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] },
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] },
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] },
    { name: "A Cool Story From Google or Ars Technica", rawUrl: "www.google.com", id: Math.floor((Math.random() * 100) + 1), score: 0, comments: [] }
  ];
  factory.addLink = function() {
    factory.links.push({ name: factory.linkName, rawUrl: factory.rawUrl, id: factory.links.length + 1, score: 0, comments: [] });
    console.log(factory.links);
    factory.linkName = null;
  };

  return factory;
});
