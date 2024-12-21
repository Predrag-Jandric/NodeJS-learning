const fs = require("fs");
const http = require("http");
const url = require("url");

// /////////////////////////////
// FOR FILES

// blocking way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `my fruit info is ${textIn}.  Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file written");

// non blocking way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     if(err) return console.log("error");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2}\n${data3} HELL OWORLD`,
//         "utf-8",
//         (err) => {
//           console.log("file has been writen ");
//         }
//       );
//     });
//   });
// });
// console.log("will read file");

// /////////////////////////////
// FOR SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview" || pathName === "/") {
    res.end("overview page");
  } else if (pathName === "/product") {
    res.end("product page");
  } else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello custom header",
    });
    res.end("<h1>page not found</h1>");
  }
});

// number for localhost and port
server.listen(8000, "127.0.0.1", () => {
  console.log("server started");
});
