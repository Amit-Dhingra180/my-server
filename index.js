require('dotenv').config(); // Load environment variables from .env
const http = require('http');
const port = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

// Bind to 0.0.0.0 for compatibility with Railway
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
