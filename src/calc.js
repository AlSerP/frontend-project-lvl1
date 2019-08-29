const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "What is the result of this expression?\n\n";

exports.quizGenerator = () => {
    const items = ["+", "-", "*"];
    const body = [getRandomNum(50), items[getRandomNum(items.length-1)], getRandomNum(50)];
    return [quizTextGenerator(body), String(troothGenerator(body))];
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
