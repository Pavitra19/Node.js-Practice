/* const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc(); 

console.log(counter.getCount());

*/

//const name = require("./myModule")
//console.log(name);

const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc(); 
dec();

console.log(getCount());
