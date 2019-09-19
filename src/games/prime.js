const randomNum = require("../modules/getRandomNum");
const engine = require("../");

exports.gameStart = () => engine.gameStarter(rules, quizGenerator);

const rules = "Answer \"yes\" if number prime. Otherwise answer \"no\".\n\n";
const quizGenerator = () => {
    const quizBody = randomNum.getRandomNum(0, 100);
    return [quizTextGenerator(quizBody), String(troothGenerator(quizBody))];
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