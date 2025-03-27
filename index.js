const http = require("http");

console.log("Node.js in Jenkins Pipeline Please!");
const server = http.createServer((req, res) => {
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
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <title>Landing Page</title>
//                 <style>
//                     body {
//                         font-family: Arial, sans-serif;
//                         text-align: center;
//                         margin: 0;
//                         padding: 0;
//                         background-color: #f4f4f4;
//                     }
//                     header {
//                         background: #333;
//                         color: #fff;
//                         padding: 1rem 0;
//                     }
//                     h1 {
//                         margin: 0;
//                     }
//                     p {
//                         color: #555;
//                     }
//                 </style>
//             </head>
//             <body>
//                 <header>
//                     <h1>Welcome to My Landing Page</h1>
//                 </header>
//                 <main>
//                     <p>This is a simple landing page created with Node.js.</p>
//                 </main>
//             </body>
//             </html>
//         `);
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
