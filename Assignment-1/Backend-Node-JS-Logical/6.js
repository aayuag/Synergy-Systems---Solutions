const fs = require("fs");
  
let directory_name = "../backend-node-js-logical";
  
let filenames = fs.readdirSync(directory_name);
  
console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    console.log("File:", file);
});