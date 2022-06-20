const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const init = "<html><body><h3>Hello Word!</h3></body></html>";
const teste = "<html><body><p>Isso é um teste!</p></body>";

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    if (req.url == "/teste") {
        res.end(teste);
    } else {
        res.end(init);
    }
}).listen(port, hostname, () => {
    console.log("O servidor está sendo executado en http://127.0.0.1:3000/");
});