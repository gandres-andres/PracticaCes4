var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var app = require('express');

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

function sendStatus(res, status) {
        var html = path.join(__dirname, 'public', 'pushStatus.html');
        html = (fs.readFileSync(html)).toString();
        html.replace("titulo",status.Status);
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(status.Message);
    fs.createReadStream('./public/pushStatus.html').pipe(res);
}

var mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html'
};

http.createServer(function (req, res) {
    console.log(req.url, req.method)
    if (req.method == 'GET') {
        var fileurl = '/status.html';
        if (req.url == '/')
            fileurl = '/status.html';
        else
            fileurl = req.url;
        var filepath = path.resolve('./public' + fileurl);

        var fileExt = path.extname(filepath);
        var mimeType = mimeLookup[fileExt];
        if (!mimeType) {
            var q = url.parse(req.url, true).query;
            if (q != undefined) {
                sendStatus(res, q);
                return;
            } else {
                send404(res);
                return;
            }
        }
        fs.exists(filepath, function (exists) {
            if (!exists) {
                send404(res);
                return;
            };
            res.writeHead(200, { 'content-type': mimeType });
            fs.createReadStream(filepath).pipe(res);
        });
    } else {
        send404(res);
    }
}).listen(3030);

console.log('server running on port 3030'); 