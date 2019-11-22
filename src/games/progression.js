import getRandomNum from "../modules/getRandomNum";
import playQuiz from "..";

const startGame = () => { playQuiz(description, generateQuiz) };

export default startGame;

const description = "What numder is missing in the progresion?";
const generateQuiz = () => {
    const progresionLength = 10;
    const progressionBeginig = getRandomNum(0, 50);
    const progresionStep = getRandomNum(1, 10);
    const unknownNumber = getRandomNum(0, progresionLength-1);

    const question = generateQuestionText([progressionBeginig, progresionStep, unknownNumber], progresionLength);
    const answer = String(progressionBeginig + (unknownNumber * progresionStep));

    return [question, answer];
};

const generateQuestionText = (progressionParametrs, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == progressionParametrs[2]) questionText += "... "; 
        else questionText += progressionParametrs[0] + (progressionParametrs[1] * i) + " ";
    }
    return questionText;
};
