const randomNum = require("../modules/getRandomNum");
const engine = require("../");

exports.gameStart = () => engine.gameStarter(rules, quizGenerator);

const rules = "What numder is missing in the progresion?\n\n";
const quizGenerator = () => {
    const progresionLength = 10;
    const quizBody = [randomNum.getRandomNum(0, 50), randomNum.getRandomNum(0, 9) + 1, randomNum.getRandomNum(0, progresionLength-1)]; // [progressionBeginig, step, hiddenNumber]
    return [quizTextGenerator(quizBody, progresionLength), String(troothGenerator(quizBody))];
};
const quizTextGenerator = (quizBody, progresionLength) => {
    let quizText = "";
    for (let i = 0; i < progresionLength; i++) {
        if (i == quizBody[2]) quizText += "... "; 
        else quizText += quizBody[0] + (quizBody[1] * i) + " ";
    }
    return quizText;
};
const troothGenerator = (quizBody) => {
    return quizBody[0] + (quizBody[1] * quizBody[2]);
};