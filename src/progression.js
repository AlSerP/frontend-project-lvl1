const readlineSync = require("readline-sync");
const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "What numder is missing in the progresion?\n\n";

exports.quizGenerator = () => {
    const body = [getRandomNum(50), getRandomNum(9) + 1, getRandomNum(9)]; // [progressionBeginig, step, hiddenNumber]
    return [quizTextGenerator(body), String(troothGenerator(body))];
};
const quizTextGenerator = (quizBody) => {
    let quizText = "";
    for (let i = 0; i < 10; i++) {
        if (i == quizBody[2]) quizText += "... "; 
        else quizText += quizBody[0] + (quizBody[1] * i) + " ";
    }
    return quizText;
};
const troothGenerator = (quizBody) => {
    return quizBody[0] + (quizBody[1] * quizBody[2]);
};