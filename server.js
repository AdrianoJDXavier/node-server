const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    var title = '';
    var content = '';
    if (req.url == "/teste") {
        title = "Teste";
        content = "Isso é um teste!"
    } else {
        title = "Hello";
        content = "Hello World"
    }

    var code = [
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '<meta charset="utf-8" />',
        '<title>' + title + '</title>',
        '</head>',
        '<body>',
        '<h3>',
        content,
        '</h3>',
        '</body>',
        '</html>'
    ].join('\n');

    res.write(code, "utf8");
    res.end();

}).listen(port, hostname, () => {
    console.log("O servidor está sendo executado en http://127.0.0.1:3000/");
});