const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "Find the greatest common divisor of given numbers.\n\n";

exports.quizGenerator = () => {
    const body = [getRandomNum(50), getRandomNum(50)];
    return [quizTextGenerator(body), String(troothGenerator(body))];
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