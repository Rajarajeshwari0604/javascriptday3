const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('content-type' , 'text/html');
    res.end('<h1> Welcome to node.js with HTML</h1>');
});

server.listen(2000);

//http://localhost:2000