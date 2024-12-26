const EventEmitter = require("events");
const myEmiter = new EventEmitter();

const http = require("http");

// myEmiter.on("newSale", () => {
//   console.log("there was new sale");
// });

// myEmiter.on("newSale", () => {
//   console.log("other things");
// });

// myEmiter.on("newSale", (stock) => {
//   console.log(`${stock} number`);
// });

// myEmiter.emit("newSale", 9);
// ------------------
// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("request received");
//   res.end("bla bla");
// });

// server.on("request", (req, res) => {
//   console.log("request 2 received");
//   res.end("bla bla 2");
// });

// server.on("close", () => {
//   console.log("close");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("waiting for reqs");
// });

