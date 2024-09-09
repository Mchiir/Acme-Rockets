const http = require('http');
const PORT = 2000;
const hostname = "127.0.0.1";
var dt = require('./dates');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("You're Highly WElcomed!<br> We're on "+ dt.date() +'<br>'+ req);
}).listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});