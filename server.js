
var MediaWiki = require("mediawiki");
var bot = new MediaWiki.Bot();
bot.get({ action: "query", meta: "userinfo" }).complete(function (response) {
    console.log(response.query.userinfo);
}); 

/*
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(700, {"Content-Type": "text/bold"});
  response.write("adsfdasf");
  response.end();
}).listen(8888);

*/
