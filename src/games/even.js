import {getRandomNum} from "../modules/getRandomNum";
import {quizStart} from "../";

exports.gameStart = () => quizStart(description, questionGenerate); 

const description = "Answer \"yes\" if number even otherwise answer \"no\".\n\n";
const questionGenerate = () => {
    const question = getRandomNum(1, 100);
    return [question, isEven(question)];
};
const isEven = (num) => {
    return num % 2 === 0 ? "yes" : "no";
};