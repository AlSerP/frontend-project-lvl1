const readlineSync = require("readline-sync");
const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "Answer \"yes\" if number prime. Otherwise answer \"no\".\n\n";

exports.quizGenerator = () => {
    const body = getRandomNum(100);
    return [quizTextGenerator(body), String(troothGenerator(body))];
};
const quizTextGenerator = (quizBody) => {
    return String(quizBody);
};
const troothGenerator = (quizBody) => {
    const isPrime = function(num) {
        for (let i = 2; i <= num; i++){
            if (num % i === 0) return i;
        }
    };
    return isPrime(quizBody) === quizBody ? "yes" : "no";    
};