import {getRandomNum} from "../modules/getRandomNum";
import {playQuiz} from "../";

exports.startGame = () => playQuiz(description, generateQuizAndResult);

const description = "What numder is missing in the progresion?";
const generateQuizAndResult = () => {
    const progresionLength = 10;
    const progressionBeginig = getRandomNum(0, 50),
        progresionStep = getRandomNum(0, 9) + 1,
        hiddenNumberId = getRandomNum(0, progresionLength-1);

    return [questionTextGenerate([progressionBeginig, progresionStep, hiddenNumberId], progresionLength), String(progressionBeginig + (hiddenNumberId * progresionStep))];
};
const questionTextGenerate = (question, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == question[2]) questionText += "... "; 
        else questionText += question[0] + (question[1] * i) + " ";
    }
    return questionText;
};
