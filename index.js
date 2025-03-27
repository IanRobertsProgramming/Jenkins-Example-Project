const http = require("http");

// Create a simple server that returns a basic HTML page
const createServer = () => {
  const server = http.createServer((req, res) => {
    // Check the request method and URL
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Basic Index Page</title>
        </head>
        <body>
            <h1>Welcome to the Basic Index Page</h1>
            <p>This is a simple HTML page served with Node.js.</p>
        </body>
        </html>
      `);
      // If the URL is not found, return a 404 Not Found response
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  });
  return server;
};

// Export the server creation function and allow it to be started manually from jenkins
module.exports = createServer;

// Simple function to add two numbers for more basic example

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;
