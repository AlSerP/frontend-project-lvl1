const RandomNum = require("../modules/getRandomNum");

exports.rules = "What numder is missing in the progresion?\n\n";

exports.quizGenerator = () => {
    const progresionLength = 10;
    const quizBody = [RandomNum.getRandomNum(0, 50), RandomNum.getRandomNum(0, 9) + 1, RandomNum.getRandomNum(0, progresionLength-1)]; // [progressionBeginig, step, hiddenNumber]
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