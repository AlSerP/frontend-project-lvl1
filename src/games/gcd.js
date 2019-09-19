const randomNum = require("../modules/getRandomNum");
const engine = require("../");

exports.gameStart = () => engine.gameStarter(rules, quizGenerator); 

const rules = "Find the greatest common divisor of given numbers.\n\n";
const quizGenerator = () => {
    const quizBody = [randomNum.getRandomNum(0, 50), randomNum.getRandomNum(0, 50)];
    return [quizTextGenerator(quizBody), String(troothGenerator(quizBody))];
};
const quizTextGenerator = (quizBody) => {
    return quizBody[0] + " " + quizBody[1];
};
const troothGenerator = (quizBody) => {
    const gcd = function(a, b) {
        if (!b) {
            return a;
        }
    
        return gcd(b, a % b);
    };
    return gcd(quizBody[0], quizBody[1]);    
};