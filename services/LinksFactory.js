hackerNews.factory('LinksFactory', function LinksFactory(UtilitiesFactory) {
  var factory = {};
  factory.links = [
    { name: "A Cool Story From Google", rawUrl: "www.google.com", id: 1, score: 0, comments: [
    { name: "User", commentData: "Lorem ipsum dolor sit amet, ad hinc laudem efficiantur sea, at scripta debitis corrumpit sea. Minim adipisci eam ea, eu per saperet lobortis. Per ad debitis inermis adolescens, his quod dissentias cu. Elit graecis suscipiantur eu ius, ea menandri imperdiet sea. Et vix diam eros instructior, vim ea efficiantur necessitatibus.",
    commentDate: new Date, commentScore: 0 }
    ] },
    { name: "A Cool Story From Ars Technica", rawUrl: "www.arstechnica.com", id: 2, score: 0, comments: [] },
    { name: "A Cool Story about Becky", rawUrl: "www.google.com", id: 3, score: 0, comments: [] },
    { name: "A Cool Story Bro", rawUrl: "www.google.com", id: 4, score: 0, comments: [] },
    { name: "A Programming Story", rawUrl: "www.google.com", id: 5, score: 0, comments: [] },
    { name: "A Graphics Card Review", rawUrl: "www.google.com", id: 6, score: 0, comments: [] }
  ];

  return factory;
});
