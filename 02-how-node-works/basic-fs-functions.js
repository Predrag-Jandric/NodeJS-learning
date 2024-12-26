const fs = require("fs");

// read file
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// write file
fs.writeFile('example.txt', 'I am HEREEEE', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

// append data
fs.appendFile('example.txt', '\nBLABLA BLA BLA.', (err) => {
  if (err) {
    console.error('Error appending file:', err);
    return;
  }
  console.log('Data appended successfully');
});

// delete file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully');
});
