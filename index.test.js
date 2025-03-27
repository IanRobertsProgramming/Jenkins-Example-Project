const http = require("http");
const request = require("supertest");

// Function to start the server for testing
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Basic Index Page</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
      }
    });

    const PORT = 3000;
    server.listen(PORT, () => resolve(server));
  });
}

let server;

// Start the server before running tests
beforeAll(async () => {
  server = await startServer();
});

// Close the server after tests
afterAll(() => {
  server.close();
});

// Test if the homepage returns 200 and correct content
test("GET / should return 200 and contain 'Welcome to the Basic Index Page'", async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toContain("Welcome to the Basic Index Page");
});

// Test if an unknown route returns 404
test("GET /unknown should return 404", async () => {
  const response = await request(server).get("/unknown");
  expect(response.status).toBe(404);
});
