const randoNum = require("../modules/getRandomNum");
const engine = require("../")

exports.gameStart = () => engine.gameStarter(rules, quizGenerator); 

const rules = "What is the result of this expression?\n\n";
const quizGenerator = () => {
    const items = ["+", "-", "*"];
    const quizBody = [randoNum.getRandomNum(0, 50), items[randoNum.getRandomNum(0, items.length-1)], randoNum.getRandomNum(0, 50)];
    return [quizTextGenerator(quizBody), String(troothGenerator(quizBody))];
};
const quizTextGenerator = (quizBody) => {
    return quizBody[0] + " " + quizBody[1] + " " + quizBody[2];
};
const troothGenerator = (quizBody) => {
    switch (quizBody[1]) {
        case "+":
            return quizBody[0] + quizBody[2];
        case "-":
                return quizBody[0] - quizBody[2];
        case "*":
                return quizBody[0] * quizBody[2];
    }
};
