import getRandomNum from '../modules/getRandomNum';
import playGame from '..';

const description = 'Answer "yes" if number prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [String(question), answer];
};

const startGame = () => playGame(description, generateQuestionAndAnswer);

export default startGame;
