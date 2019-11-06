import {getRandomNum} from "../modules/getRandomNum";
import {quizStart} from "../";

exports.gameStart = () => quizStart(description, questionGenerate); 

const description = "What is the result of this expression?\n\n";
const questionGenerate = () => {
    const mathOperations = ["+", "-", "*"];
    const question = [getRandomNum(0, 50), mathOperations[getRandomNum(0, mathOperations.length-1)], getRandomNum(0, 50)];
    return [question[0] + " " + question[1] + " " + question[2], String(calcResult(question[0], question[2], question[1]))];
};
const calcResult = (num1, num2, operation) => {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
                return num1 - num2;
        case "*":
                return num1 * num2;
    }
};
