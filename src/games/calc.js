import getRandomNum from '../modules/getRandomNum';
import playGame from '..';

const mathOperations = ['+', '-', '*'];
const description = 'What is the result of this expression?';
const calcResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNum(0, 50);
  const num2 = getRandomNum(0, 50);
  const operation = mathOperations[getRandomNum(0, mathOperations.length - 1)];

  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calcResult(num1, num2, operation));

  return [question, answer];
};

const startGame = () => playGame(description, generateQuestionAndAnswer);

export default startGame;
