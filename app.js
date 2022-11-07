//node.js web server
//by: @josephg
//date: 2014-06-20
//desc: simple node.js web server

//require http module
var http = require('http');
//require url module
var url = require('url');
//require file system module
var fs = require('fs');

//create server
http.createServer(function (req, res) {
    //parse url
    var q = url.parse(req.url, true);
    //get filename
    var filename = "." + q.pathname;
    //read file
    fs.readFile(filename, function(err, data) {
        //if error
        if (err) {
            //set response header
            res.writeHead(404, {'Content-Type': 'text/html'});
            //return 404 message
            return res.end("404 Not Found");
        }
        //set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        //write file to response
        res.write(data);
        //end response
        return res.end();
    });
//listen on port 8080
}).listen(8080);

//log to console
console.log('Server runnin');
