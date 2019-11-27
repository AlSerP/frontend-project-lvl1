import getRandomNum from "../modules/getRandomNum";
import playGame from "..";

const startGame = () => { playGame(description, generateQuiz) };

const progresionLength = 10;
const description = "What numder is missing in the progresion?";
const generateQuiz = () => {
    const progressionBeginning = getRandomNum(0, 50);
    const progresionStep = getRandomNum(1, 10);
    const unknownElement = getRandomNum(0, progresionLength-1);

    const question = generateQuestionText(progressionBeginning, progresionStep, unknownElement, progresionLength);
    const answer = String(progressionBeginning + (unknownElement * progresionStep));

    return [question, answer];
};

const generateQuestionText = (progressionBeginning, progresionStep, unknownElement, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == unknownElement) questionText += "... "; 
        else questionText += progressionBeginning + (progresionStep * i) + " ";
    }
    return questionText;
};

export default startGame;
