import getRandomNum from "../modules/getRandomNum";
import playQuiz from "../";

export default function startGame () { playQuiz(description, generateQuiz) }

const description = "What numder is missing in the progresion?";
const generateQuiz = () => {
    const progresionLength = 10;
    const progressionBeginig = getRandomNum(0, 50);
    const progresionStep = getRandomNum(1, 10);
    const hiddenNumber = getRandomNum(0, progresionLength-1);

    const question = generateQuestionText([progressionBeginig, progresionStep, hiddenNumber], progresionLength);
    const answer = String(progressionBeginig + (hiddenNumber * progresionStep));

    return [question, answer];
};

const generateQuestionText = (question, progresionLength) => {
    let questionText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == question[2]) questionText += "... "; 
        else questionText += question[0] + (question[1] * i) + " ";
    }
    return questionText;
};
