import {getRandomNum} from "../modules/getRandomNum";
import {quizStart} from "../";

exports.gameStart = () => quizStart(description, questionGenerate);

const description = "What numder is missing in the progresion?\n\n";
const questionGenerate = () => {
    const progresionLength = 10;
    const question = [getRandomNum(0, 50), getRandomNum(0, 9) + 1, getRandomNum(0, progresionLength-1)]; // [progressionBeginig, step, hiddenNumberId]
    return [questionTextGenerate(question, progresionLength), String(hiddenNumberFind(question[0], question[1], question[2]))];
};
const questionTextGenerate = (question, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == question[2]) questionText += "... "; 
        else questionText += question[0] + (question[1] * i) + " ";
    }
    return questionText;
};
const hiddenNumberFind = (progressionBeginig, step, hiddenNumberId) => {
    return progressionBeginig + (hiddenNumberId * step);
};