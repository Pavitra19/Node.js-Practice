console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const[,,firstName, lastName] = process.argv; 
console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexof(flag)  + 1; 
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

//Writ this in terminal: node globalProcess --user Pavi --greeting "Hey" 
console.log(`${greeting} ${user}`);