const fetch = require("node-fetch"); // Assuming you are using node-fetch for HTTP requests
const createServer = require("./index"); // Import the createServer function
let server;

beforeAll(async () => {
  server = createServer();
  await new Promise((resolve, reject) => {
    server.listen(0, () => {
      // Use 0 to let the system pick an available port
      resolve();
    });
  });
}, 10000); // Increase timeout to 10 seconds

afterAll(() => {
  if (server) {
    server.close();
  }
});

test("GET / should return 200 and contain 'Welcome to the Basic Index Page'", async () => {
  const response = await fetch("http://localhost:3000"); // Adjust to use the correct dynamic port if necessary
  const text = await response.text();
  expect(response.status).toBe(200);
  expect(text).toContain("Welcome to the Basic Index Page");
});

test("GET /unknown should return 404", async () => {
  const response = await fetch("http://localhost:3000/unknown");
  const text = await response.text();
  expect(response.status).toBe(404);
  expect(text).toContain("404 Not Found");
});
