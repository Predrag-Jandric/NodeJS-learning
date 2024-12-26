const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1 just reading the file (BAD for production)
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // solution 2 using streams (streaming) but still has problem and NOT to be used. this problem is called "back pressure"
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });

  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("file not found");
  //   });

  // solution 3 best solution, uses pipe. solves the problem of back pressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // explanation in video 37 - Streams in Practice
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for reqs");
});
