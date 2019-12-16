import getRandomNum from "../modules/getRandomNum";
import playGame from "..";

const startGame = () => playGame(description, generateQuestion);

const description = "Find the greatest common divisor of given numbers.";
const generateQuestion = () => {
    const num1 = getRandomNum(0, 50);
    const num2 = getRandomNum(0, 50);

    const question = `${num1} ${num2}`;
    const answer = String(findGcd(num1, num2));

    return [question, answer];
};

const findGcd = (num1, num2) => {
    if (!num2) {
        return num1;
    }

    return findGcd(num2, num1 % num2);
};

export default startGame;
