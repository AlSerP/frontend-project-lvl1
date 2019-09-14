const RandomNum = require("../modules/getRandomNum")

exports.rules = "Find the greatest common divisor of given numbers.\n\n";

exports.quizGenerator = () => {
    const quizBody = [RandomNum.getRandomNum(0, 50), RandomNum.getRandomNum(0, 50)];
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