const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) return reject("there is an error");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  // Single writeFilePro function
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      // Correct callback implementation
      if (err) reject("Error while writing to the file");
      resolve("File written successfully");
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`breed ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writeFilePro("dog-img.txt", res.body.message);
    console.log("random dog image saved to file");
  } catch (err) {
    console.log(err);
  }
};

getDogPic();
