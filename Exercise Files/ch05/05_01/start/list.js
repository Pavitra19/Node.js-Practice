const fs = require("fs");

//function is executing synchronously
// const files = fs.readdirSync("./assets");

//async function, once files are read, will be passed to a callback function (error, files themselves)

fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("Complete");

    console.log(files);
});

console.log("Started reading files");
