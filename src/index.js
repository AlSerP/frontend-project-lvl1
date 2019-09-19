var readlineSync = require("readline-sync");

exports.gameStarter = (rules = "\n", quizBody) => {
    const name = userWelcome(rules);
    if (rules === "\n") return 0;
    const result = asker(name, quizBody);
    endGame(name, result);
};

const userWelcome = (rules = "\n") => {
    console.log("Welcome to the Brain Games!");
    console.log(rules);

    const name = readlineSync.question("May I have your name? ");
    console.log("Hello, " + name + "!");

    return name;
};
const endGame = (name, result) => {
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

const quizAsk = (name, quizBodyCreate) => {
    let trooth, quizText;
    [quizText, trooth] = quizBodyCreate(); // [text, trooth]
    console.log("Question: " + quizText);
    const answer = readlineSync.question("Your answer: ");
    
    return answer === trooth ? rightAnswer() : wrongAnswer(name, trooth, answer);
};
const asker = (name, quizBody) => {
    console.log("\n");
    let i = 0;
    while (i < 3) {
        if (!quizAsk(name, quizBody)) return 0;
        i += 1; // score counter
    }
    return 1;
};