import {getRandomNum} from "../modules/getRandomNum";
import {quizStart} from "../";

exports.gameStart = () => quizStart(description, questionGenerate); 

const description = "Find the greatest common divisor of given numbers.\n\n";
const questionGenerate = () => {
    const question = [getRandomNum(0, 50), getRandomNum(0, 50)];
    return [question[0] + " " + question[1], String(gcdFind(question[0], question[1]))];
};

const gcdFind = function(num1, num2) {
    if (!num2) {
        return num1;
    }

    return gcdFind(num2, num1 % num2);
};