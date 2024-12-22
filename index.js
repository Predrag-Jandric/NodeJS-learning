const fs = require("fs");
const http = require("http");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require("./modules/replaceTemplate");

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

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el)=> slugify(el.productName, { lower: true }))

console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // overview page
  if (pathname === "/overview" || pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join();
    // console.log(cardsHtml);
    // console.log(dataObj);
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    // product page
  } else if (pathname === "/product") {
    const product = dataObj[query.id];
    res.writeHead(200, { "content-type": "text/html" });
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // api
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);

    // not found page
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
