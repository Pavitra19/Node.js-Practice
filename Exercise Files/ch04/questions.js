const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Create array to hold our questions
const questions = [
    "What is your name ",
    "Where do you live? ",
    "What are you going to do with node js? "
];


const collectAnswers = (questions, done) => {
    const answers = []; 
    const [firstQuestion] = questions;
    
    //add answers to answers array
    const questionAnswered = answer => {
        answers.push(answer);

        //if not all questions asked, another question will be asked
        if (answers.length < questions.length){
            //find the question from the questions array directly 
            rl.question(questions[answers.length], questionAnswered);
        } 
        //once all questions answered, done callback will be invoked and answers 
        //will be passed there
        else{
            done(answers);
        }
    };
    
    //Use readline to ask first question
    // every other question is asked on line 23
    rl.question(firstQuestion, questionAnswered);

};

//Function which we can send questions to
// and a callback to handle once we have the answers 

collectAnswers(questions, answers => {
  
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();

});
