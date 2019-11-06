import {getRandomNum} from "../modules/getRandomNum";
import {quizStart} from "../";

exports.gameStart = () => quizStart(description, questionGenerate);

const description = "Answer \"yes\" if number prime. Otherwise answer \"no\".\n\n";
const questionGenerate = () => {
    const question = getRandomNum(0, 100);
    return [String(question), String(isPrime(question))];
};

const isPrime = function(num) {
    for (let i = 2; i <= num; i++){
        if (num % i === 0) return i === num ? "yes" : "no";
    }
}; 
