import {question} from "readline-sync";

const roundsCount = 3;

const playGame = (description = "", gameQuestion) => {
    console.log("Welcome to the Brain Games!");
    console.log(description + "\n\n");
    const name = question("May I have your name? ");
    console.log("Hello, " + name + "!");

    if (description === "") return 0;

    console.log("\n");
    let isWin = true;
    for (let i = 0; i < roundsCount; i++) {
        const [quizText, trooth] = gameQuestion();
        console.log("Question: " + quizText);
        const answer = question("Your answer: ").toLowerCase();
        
        if (answer === trooth) {
            console.log("Correct");
        }
        else {
            console.log("\"" + answer + "\" is wrong answer ;(. Correct answer was \"" + trooth + "\".");
            console.log("Let's try again, " + name + "!");
            isWin = false;
            break;
        }
    }

    isWin ? console.log("Congredulations, " + name + "!") : NaN;
}

export default playGame;