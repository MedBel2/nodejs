const fs = require('fs');
const filePath = 'welcome.txt';
const fileContent = 'Hello Node';
fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File "${filePath}" created successfully.`);
  });