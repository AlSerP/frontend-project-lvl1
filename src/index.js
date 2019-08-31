var readlineSync = require("readline-sync");

exports.startGame = (rules = "\n") => {
    console.log("Welcome to the Brain Games!");
    console.log(rules);

    const name = readlineSync.question("May I have your name? ");
    console.log("Hello, " + name + "!");
    console.log("\n");

    return name;
};
exports.endGame = (name, result) => {
    result ? console.log("Congredulations, " + name + "!") : NaN;
};

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
    while (i < 3) {
        if (!quiz(name, type)) return 0;
        i += 1; // score counter
    }
    return 1;
};