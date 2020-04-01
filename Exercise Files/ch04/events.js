const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    //first argument is the second argument of the emit function, etc
    console.log(`${user}: ${message}`);
});

/*emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool huh?", "Pavi");
*/ 

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        //first argument is string name of event
        //Next arguments is data being passed to handler 
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    
    emitter.emit("customEvent", input, "terminal");
});