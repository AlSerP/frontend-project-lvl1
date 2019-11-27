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
    for (let roundNum = 0; roundNum < roundsCount; roundNum++) {
        const [quizText, trooth] = gameQuestion();
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
        
        if (!isRight) {
            isWin = false;
            break;
        }
    }

    isWin ? console.log("Congredulations, " + name + "!") : NaN;
}

export default playGame;