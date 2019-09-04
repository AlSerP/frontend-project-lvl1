const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "What numder is missing in the progresion?\n\n";

exports.quizGenerator = () => {
    const progresionLength = 10;
    const body = [getRandomNum(50), getRandomNum(9) + 1, getRandomNum(progresionLength-1)]; // [progressionBeginig, step, hiddenNumber]
    return [quizTextGenerator(body, progresionLength), String(troothGenerator(body))];
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