var readlineSync = require("readline-sync");

exports.startGame = () => {
    console.log("Welcome to the Brain Games!");
    console.log("Answer \"yes\" if number even otherwise answer \"no\".");
    console.log("\n");
};

exports.welcome = (name) => {
    console.log("Hello, " + name + "!");
    console.log("\n");
}

const question = (name) => {
    const randomNum = Math.round(Math.random() * 99) + 1;
    const trooth = randomNum % 2 === 0 ? "yes" : "no"; 
    console.log("Question: " + randomNum);
    const answer = readlineSync.question("Your answer: ");
    if (answer === trooth) {
        console.log('Correct');
        return 1;
    }
    console.log("\'" + answer + "\' is wrong answer ;(. Correct answer was \'" + trooth + "\'.");
    console.log("Let\'s try again, " + name + "!");
    return 0;
};

exports.asker = (name) => {
    let i = 0;
    while (i < 3) {
        i = (i + 1) * question(name);
    };
};

exports.endGame = (name) => {
    console.log("Congredulations, " + name + "!");
};