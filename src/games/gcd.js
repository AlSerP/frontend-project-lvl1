import getRandomNum from "../modules/getRandomNum";
import playQuiz from "..";

const startGame = () => playQuiz(description, generateQuiz);

export default startGame;

const description = "Find the greatest common divisor of given numbers.";
const generateQuiz = () => {
    const num1 = getRandomNum(0, 50);
    const num2 = getRandomNum(0, 50);

    const question = num1 + " " + num2;
    const answer = String(gcdFind(num1, num2));

    return [question, answer];
};

const gcdFind = (num1, num2) => {
    if (!num2) {
        return num1;
    }

    return gcdFind(num2, num1 % num2);
};