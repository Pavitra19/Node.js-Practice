const path = require("path");

// const dirUploads = path.join(_dirname, "www", "Files", "Uploads");

// console.log(dirUploads);

//const util = require("util");
const { log } = require("util");
//const v8 = require("v8");
const { getHeapStatistics } = require("v8");

//util.log(path.basename(__filename));

//util.log(" ^ The name of the current file"); 

//util.log(v8.getHeapStatistics());

log(getHeapStatistics()); 