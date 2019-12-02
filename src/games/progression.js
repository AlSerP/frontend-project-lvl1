import getRandomNum from "../modules/getRandomNum";
import playGame from "..";

const startGame = () => { playGame(description, generateQuiz) };

const progresionLength = 10;
const description = "What numder is missing in the progresion?";
const generateQuiz = () => {
    const progressionBeginning = getRandomNum(0, 50);
    const progresionStep = getRandomNum(1, 10);
    const unknownElementIndex = getRandomNum(0, progresionLength-1);

    const question = generateQuestionText(progressionBeginning, progresionStep, unknownElementIndex, progresionLength);
    const answer = String(progressionBeginning + (unknownElementIndex * progresionStep));

    return [question, answer];
};

const generateQuestionText = (progressionBeginning, progresionStep, unknownElementIndex, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == unknownElementIndex) questionText += "... "; 
        else questionText += progressionBeginning + (progresionStep * i) + " ";
    }
    
    return questionText.slice(0, -1);
};

export default startGame;
