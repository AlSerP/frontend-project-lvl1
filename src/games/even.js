const getRandomNum = (max) => Math.round(Math.random() * max);

exports.rules = "Answer \"yes\" if number even otherwise answer \"no\".\n\n";

exports.quizGenerator = () => {
    const body =  getRandomNum(100);
    return [quizTextGenerator(body), troothGenerator(body)];
};
const quizTextGenerator = (quizBody) => {
    return quizBody;
};
const troothGenerator = (quizBody) => {
    return quizBody % 2 === 0 ? "yes" : "no";
};