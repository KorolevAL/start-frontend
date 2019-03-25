const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response){
    console.log(request.method, request.url);
    if(request.url == "/style.css"){
        const css = fs.readFileSync("style.css", "utf8");
        response.end(css);
    }
    else{
        const html = fs.readFileSync("index.html", "utf8");

        response.end(html);
    }


});
console.log("port = ", pocess.env.PORT);
server.listen( pocess.env.PORT || 3000);
console.log("server is started");
