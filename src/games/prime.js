import getRandomNum from "../modules/getRandomNum";
import playQuiz from "../";

export default function startGame () { playQuiz(description, generateQuiz) }

const description = "Answer \"yes\" if number prime. Otherwise answer \"no\".";
const generateQuiz = () => {
    const question = getRandomNum(0, 100);
    const answer = isPrime(question) ? "yes" : "no";

    return [String(question), answer];
};

const isPrime = function(num) {
    for (let i = 2; i <= num; i++){ 
        if (num % i === 0) 
            return i === num ? true : false; 
    } 
}; 
