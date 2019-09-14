const RandomNum = require("../modules/getRandomNum")

exports.rules = "What is the result of this expression?\n\n";

exports.quizGenerator = () => {
    const items = ["+", "-", "*"];
    const quizBody = [RandomNum.getRandomNum(0, 50), items[RandomNum.getRandomNum(0, items.length-1)], RandomNum.getRandomNum(0, 50)];
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
