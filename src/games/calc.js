import {getRandomNum} from "../modules/getRandomNum";
import {playQuiz} from "../";

exports.startGame = () => playQuiz(description, generateQuizAndResult); 

const mathOperations = ["+", "-", "*"];
const description = "What is the result of this expression?";

const generateQuizAndResult = () => {
    const num1 = getRandomNum(0, 50), 
        num2 = getRandomNum(0, 50), 
        operation = mathOperations[getRandomNum(0, mathOperations.length-1)];
    
    return [num1 + " " + operation + " " + num2, String(calcResult(num1, num2, operation))];
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
