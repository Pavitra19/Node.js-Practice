const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);

  // add up all the chunks of data
  fileTxt += data;
});

// First little bit of data from the file
readStream.once("data", data => {
  console.log(data);
});

// streams also raise an end event 
readStream.on("end", () => {
  console.log("Finished reading file");
  console.log(`In total I read ${fileTxt.length - 1} characters of text`);

});
