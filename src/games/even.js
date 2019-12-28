import getRandomNum from '../modules/getRandomNum';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => playGame(description, generateQuestionAndAnswer);

export default startGame;
