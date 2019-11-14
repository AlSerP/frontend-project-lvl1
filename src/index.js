import {question} from "readline-sync";

export default function playQuiz (description = "", gameQuestion) {
    console.log("Welcome to the Brain Games!");
    console.log(description + "\n\n");
    const name = question("May I have your name? ");
    console.log("Hello, " + name + "!");

    if (description === "") return 0;

    console.log("\n");
    let isWin = true;
    for (let i = 0; i < 3; i++) {
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
        
        if (!isRight) isWin = false, i = 3;
    }

    isWin ? console.log("Congredulations, " + name + "!") : NaN;
}
