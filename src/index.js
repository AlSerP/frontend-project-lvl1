var readlineSync = require("readline-sync");

exports.startGame = (rules = "\n") => {
    console.log("Welcome to the Brain Games!");
    console.log(rules);

    const name = readlineSync.question("May I have your name? ");
    console.log("Hello, " + name + "!");
    console.log("\n");

    return name;
};

exports.endGame = (name) => {
    console.log("Congredulations, " + name + "!");
};