import {question} from "readline-sync";

exports.quizStart = (description = "\n", gameQuestion) => {
    console.log("Welcome to the Brain Games!");
    console.log(description);
    const name = question("May I have your name? ");
    console.log("Hello, " + name + "!");

    if (description === "\n") return 0;

    const result = quiz(name, gameQuestion);
    result ? console.log("Congredulations, " + name + "!") : NaN;
};

const questionAsk = (name, questionCreate) => {
    let trooth, quizText;
    [quizText, trooth] = questionCreate(); // [text, trooth]
    console.log("Question: " + quizText);
    const answer = question("Your answer: ").toLowerCase();
    
    if (answer === trooth) {
        console.log("Correct");
        return 1;
    }
    else {
        console.log("\"" + answer + "\" is wrong answer ;(. Correct answer was \"" + trooth + "\".");
        console.log("Let's try again, " + name + "!");
        return 0;
    }
};
const quiz = (name, question) => {
    console.log("\n");
    let i = 0;
    while (i < 3) {
        if (!questionAsk(name, question)) return 0;
        i += 1; // score counter
    }
    return 1;
};