const createServer = require("./index");
let server;
let port;

// Jest runs this before calling any tests
beforeAll(async () => {
  // Start the server
  server = createServer();
  await new Promise((resolve, reject) => {
    server.listen(0, () => {
      // Get the port the server is running on
      port = server.address().port;
      resolve();
    });
  });
}, 10000); // Increase timeout to 10 seconds

// Jest waits until all tests are run before calling afterAll
afterAll(() => {
  //Makes sure the frontend server is closed after all tests are
  //run, so Jest doesn't hang waiting
  if (server) {
    server.close();
  }
});

// This is an an API call to the server
test("GET / should return 200 and contain 'Welcome to the Basic Index Page'", async () => {
  // Fetches the response from the server
  const response = await fetch(`http://localhost:${port}`);
  const text = await response.text();
  // Checks if the response status is 200
  expect(response.status).toBe(200);
  // Checks if the response text contains "Welcome to the Basic Index Page"
  expect(text).toContain("Welcome to the Basic Index Page");
});

// Description of the test
test("GET /unknown should return 404", async () => {
  // Gets the response from the server giving it a path that doesn't exist
  const response = await fetch(`http://localhost:${port}/unknown`);
  const text = await response.text();
  // Checks if the response status is 404
  expect(response.status).toBe(404);
  // Checks if the response text contains "404 Not Found"
  expect(text).toContain("404 Not Found");
});
