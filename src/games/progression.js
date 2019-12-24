import getRandomNum from "../modules/getRandomNum";
import playGame from "..";

const startGame = () => playGame(description, generateQuestionAndAnswer);

const length = 10;
const description = "What numder is missing in the progresion?";
const generateQuestionAndAnswer = () => {
    const beginning = getRandomNum(0, 50);
    const step = getRandomNum(1, 10);
    const unknownElementIndex = getRandomNum(0, length-1);

    const question = generateQuestion(beginning, step, unknownElementIndex, length);
    const answer = String(beginning + (unknownElementIndex * step));

    return [question, answer];
};

const generateQuestion = (beginning, step, unknownElementIndex, length) => {
    let questionText = "";
    for (let i = 0; i < length; i++) {
        if (i == unknownElementIndex) questionText = `${questionText} ... `; 
        else questionText = `${questionText} ${beginning + step * i} `;
    }
    
    return questionText.slice(0, -1);
};

export default startGame;
