import getRandomNum from "../modules/getRandomNum";
import playQuiz from "..";

const startGame = () => playQuiz(description, generateQuiz);
export default startGame;

const description = "Answer \"yes\" if number prime. Otherwise answer \"no\".";
const generateQuiz = () => {
    const question = getRandomNum(0, 100);
    const answer = isPrime(question) ? "yes" : "no";

    return [String(question), answer];
};

const isPrime = (num) => {
    if (num === 1) return true;
    for (let i = 2; i <= num; i++){ 
        if (num % i === 0) 
            return i === num; 
    } 
}; 
