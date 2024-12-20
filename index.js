const fs = require("fs");
const http = require('http')

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
