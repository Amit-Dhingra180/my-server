require('dotenv').config(); // Load environment variables from .env

const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
