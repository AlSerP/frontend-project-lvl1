import getRandomNum from "../modules/getRandomNum";
import playQuiz from "..";

const startGame = () => playQuiz(description, generateQuiz);
export default startGame;

const description = "Answer \"yes\" if number even otherwise answer \"no\".";
const generateQuiz = () => {
    const question = getRandomNum(1, 100);
    const answer = isEven(question) ? "yes" : "no";

    return [question, answer];
};

const isEven = (num) => num % 2 === 0 ? true : false;