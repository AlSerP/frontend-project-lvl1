import {question} from "readline-sync";

exports.playQuiz = (description = "", gameQuestion) => {
    console.log("Welcome to the Brain Games!");
    console.log(description + "\n\n");
    const name = question("May I have your name? ");
    console.log("Hello, " + name + "!");

    if (description === "") return 0;

    console.log("\n");
    let i = 0, result = 1;
    while (i < 3) {
        let trooth, quizText;
        [quizText, trooth] = gameQuestion(); // [text, trooth]
        console.log("Question: " + quizText);
        const answer = question("Your answer: ").toLowerCase();
        
        let isRight = 0; 
        if (answer === trooth) {
            console.log("Correct");
            isRight = 1;
        }
        else {
            console.log("\"" + answer + "\" is wrong answer ;(. Correct answer was \"" + trooth + "\".");
            console.log("Let's try again, " + name + "!");
            isRight = 0;
        }
        
        if (!isRight) result = 0, i = 3;
        i += 1; // score counter
    }

    result ? console.log("Congredulations, " + name + "!") : NaN;
};
