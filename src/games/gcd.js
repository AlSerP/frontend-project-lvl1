import {getRandomNum} from "../modules/getRandomNum";
import {playQuiz} from "../";

exports.startGame = () => playQuiz(description, generateQuizAndResult); 

const description = "Find the greatest common divisor of given numbers.";
const generateQuizAndResult = () => {
    const num1 = getRandomNum(0, 50),
        num2 = getRandomNum(0, 50);
    return [num1 + " " + num2, String(gcdFind(num1, num2))];
};

const gcdFind = function(num1, num2) {
    if (!num2) {
        return num1;
    }

    return gcdFind(num2, num1 % num2);
};