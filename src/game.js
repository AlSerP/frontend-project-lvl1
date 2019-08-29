const readlineSync = require("readline-sync");

const wrongAnswer = (name, trooth, answer) => {
    console.log("\"" + answer + "\" is wrong answer ;(. Correct answer was \"" + trooth + "\".");
    console.log("Let's try again, " + name + "!");
    return 0;
};
const rightAnswer = () => {
    console.log("Correct");
    return 1;
};  

const quiz = (name, type) => {
    let trooth, quizText;
    [quizText, trooth] = type.quizGenerator(); // [text, trooth]
    console.log("Question: " + quizText);
    const answer = readlineSync.question("Your answer: ");
    
    return answer === trooth ? rightAnswer() : wrongAnswer(name, trooth, answer);
};
exports.asker = (name, type) => {
    let i = 0;
    while (i < 3) i = (i + 1) * quiz(name, type); // score counter
};