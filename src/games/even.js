const randomNum = require("../modules/getRandomNum");
const engine = require("../");

exports.gameStart = () => engine.gameStarter(rules, quizGenerator); 

const rules = "Answer \"yes\" if number even otherwise answer \"no\".\n\n";
const quizGenerator = () => {
    const quizBody = randomNum.getRandomNum(1, 100);
    return [quizTextGenerator(quizBody), troothGenerator(quizBody)];
};
const quizTextGenerator = (quizBody) => {
    return quizBody;
};
const troothGenerator = (quizBody) => {
    return quizBody % 2 === 0 ? "yes" : "no";
};