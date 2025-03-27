// const createServer = require("./index"); // Import the createServer function
// let server;
// let port;

// beforeAll(async () => {
//   server = createServer();
//   await new Promise((resolve, reject) => {
//     server.listen(0, () => {
//       port = server.address().port; // Dynamically get the port
//       resolve();
//     });
//   });
// }, 10000); // Increase timeout to 10 seconds

// afterAll(() => {
//   if (server) {
//     server.close();
//   }
// });

// test("GET / should return 200 and contain 'Welcome to the Basic Index Page'", async () => {
//   const response = await fetch(`http://localhost:${port}`); // Use the dynamic port
//   const text = await response.text();
//   expect(response.status).toBe(200);
//   expect(text).toContain("Welcome to the Basic Index Page");
// });

// test("GET /unknown should return 404", async () => {
//   const response = await fetch(`http://localhost:${port}/unknown`);
//   const text = await response.text();
//   expect(response.status).toBe(404);
//   expect(text).toContain("404 Not Found");
// });
const sum = require("./index");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
