const readline = require("readline");

/*destructuring the EventEmitter allows to use directly without having to 
preface with events. */

const { EventEmitter } = require("events"); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done) => {
    const answers = []; 
    const [firstQuestion] = questions;
    const emitter = new EventEmitter(); 
    
    //add answers to answers array
    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);

        //if not all questions asked, another question will be asked
        if (answers.length < questions.length){
            //find the question from the questions array directly 
            rl.question(questions[answers.length], questionAnswered);
        } 
        //once all questions answered, done callback will be invoked and answers 
        //will be passed there
        else{
            emitter.emit("complete", answers);
            done(answers);
        }
    };
    
    //Use readline to ask first question
    // every other question is asked on line 23
    rl.question(firstQuestion, questionAnswered);

    return emitter;
};
