const RandomNum = require("../modules/getRandomNum");

exports.rules = "Answer \"yes\" if number even otherwise answer \"no\".\n\n";

exports.quizGenerator = () => {
    const quizBody = RandomNum.getRandomNum(1, 100);
    return [quizTextGenerator(quizBody), troothGenerator(quizBody)];
};
const quizTextGenerator = (quizBody) => {
    return quizBody;
};
const troothGenerator = (quizBody) => {
    return quizBody % 2 === 0 ? "yes" : "no";
};