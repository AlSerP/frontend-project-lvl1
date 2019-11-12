import {getRandomNum} from "../modules/getRandomNum";
import {playQuiz} from "../";

exports.startGame = () => playQuiz(description, generateQuizAndResult); 

const description = "Answer \"yes\" if number even otherwise answer \"no\".";
const generateQuizAndResult = () => {
    const question = getRandomNum(1, 100);
    const rightAnswer = isEven(question) ? "yes" : "no";

    return [question, rightAnswer];
};
const isEven = (num) => {
    return num % 2 === 0 ? 1 : 0;
};